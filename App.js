import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NativeBaseProvider, Button, VStack} from "native-base";
import {SafeAreaView} from "react-native-safe-area-context";
import {init as earthoInit, connectWithRedirect, getIdToken, getUser} from "@eartho/one-client-react-native";

async function logUser() {
    let user = await getUser();

    console.log(user);
};

async function logIdToken() {
    let idToken = await getIdToken();

    console.log(idToken);
};

export default function App() {
    React.useEffect(() => {

        earthoInit(
            "Zw6rVtObnmY0PrSxARkb",
            "-----BEGIN PUBLIC KEY-----\n" +
            "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1bET3c/5H/dQVgVWTZLM\n" +
            "MgK7ipxKSCSVsskbUhdRhmRIOzOEXPmnE7WWBEAOkKmFhzEgyYeNSKQCDWJ84nRQ\n" +
            "TWPKXCUfNVdpHbitbXPV1HDxLzKQ+qeQ1ii5Ex/shpi8cpP/eF5GskTNebhJNoHi\n" +
            "i7hxqLp77Jy0BToHrB017xc0wXrByAIkpPvVmFdRAoklgmuqfaTgo0LjomIgvysy\n" +
            "jPUD7IpDeuVqrvAc59AjRvewl+Cv9heNoE8FS7Srz5KnkAQvjctBlz57jlzSzL3Y\n" +
            "3RbkUlW6oC55lilAqZtnZb2B6542rMc9EM9SjVs9ldNwy7Z7tJ6PHD2KZOtKFB6S\n" +
            "8QIDAQAB\n" +
            "-----END PUBLIC KEY-----\n");

    }, []);

    return (
        <NativeBaseProvider>
            <SafeAreaView>
                <VStack
                    w={'100%'}
                    space={4}
                    px={'2'}
                    mt={'4'}
                    alignItems={'center'}
                    justifyContent={'center'}>
                    <Button
                        shadow={2}
                        size={'lg'}
                        onPress={() => connectWithRedirect("lWUJneaRJaCB5HjVJeZt")}>Sign in!</Button>
                    <Button
                        shadow={2}
                        size={'lg'}
                        onPress={logUser}>Get user in console</Button>
                    <Button
                        shadow={2}
                        size={'lg'}
                        onPress={logIdToken}>Get idToken in console</Button>
                </VStack>
            </SafeAreaView>
        </NativeBaseProvider>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
