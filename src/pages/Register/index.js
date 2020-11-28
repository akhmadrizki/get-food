import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button, Input } from '../../components';
import { colors } from '../../utils';
import { IconBack } from '../../assets';
import { logoPage } from '../../assets';
import ActionButton from './ActionButton';

const Register = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    }
    return (
        <View style={styles.wrapper.pages}>
            <Image source={IconBack} style={styles.iconBack} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={logoPage} style={styles.illustration} />
            </View>
            <Text style={styles.text.desc}>Silahkan Buat Account Anda</Text>
            
            <View style={styles.space(25)} />
            <Input placeholder="NIM" />
            <View style={styles.space(18)} />
            <Input placeholder="Password" />
            <View style={styles.space(18)} />
            <Input placeholder="Confirm Password" />
            <View style={styles.space(26)} />

            <ActionButton title="Daftar" onPress={() => handleGoTo('Login')} />
            {/* <Button title="Daftar" /> */}
        </View>
    )
}

const styles = {
    wrapper: {
        pages: { 
            padding: 20, 
            backgroundColor: '#fff', 
            flex: 1 
        }
    },
    iconBack: { 
        width: 25, 
        height: 25
    },
    illustration: { 
        width: 106, 
        height: 115,
        marginTop: 28,
    },
    text: {
        desc: { 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#777', 
            marginTop: 53, 
            maxWidth: 250 
        }
    },
    space: value => {
        return {
            height: value
        }
    }
}

export default Register;