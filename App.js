import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NativeBaseProvider, Button, VStack} from "native-base";
import {SafeAreaView} from "react-native-safe-area-context";

export default function App() {
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
                        onPress={() => console.log("Button pressed!")}>Click me!</Button>
                </VStack>
            </SafeAreaView>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
