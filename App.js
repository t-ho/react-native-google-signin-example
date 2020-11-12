import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, Button} from 'react-native';

import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '564624695351-litamdvsum4g23a49kalorvsut9v0es4.apps.googleusercontent.com',
  iosClientId:
    '564624695351-km9381h44o25uijjbk29ga0unfck5cal.apps.googleusercontent.com',
  offlineAccess: false,
});

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  const onSignIn = () => {
    GoogleSignin.hasPlayServices()
      .then(() => {
        return GoogleSignin.signIn();
      })
      .then((response) => {
        setUserInfo(response);
      })
      .catch((err) => {
        // ignore
        // console.log(err);
      });
  };

  const onSignOut = () => {
    GoogleSignin.signOut()
      .then(() => {
        setUserInfo(null);
      })
      .catch((err) => {
        // ignore
      });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {userInfo ? (
          <>
            <Text>
              Hello {`${userInfo.user.givenName} ${userInfo.user.familyName}`}
            </Text>
            <Button title="Sign out" onPress={onSignOut} />
          </>
        ) : (
          <Button title="Google Login" onPress={onSignIn} />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
