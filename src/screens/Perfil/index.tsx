import React from "react"
import {View, Text} from "react-native"
import { ComponentButtonInterface } from "../../components"
import { styles } from "../Perfil/styles"
import { TabTypes } from "../../navigations/tab.navigation"

export function Perfil({navigation}: TabTypes){
    function handlevoltar(){
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return( 
        <View style={styles.container}>
            <Text>Perfil</Text>
            <ComponentButtonInterface title="Voltar" type="primary" onPressI={handlevoltar}/> 
        </View>
    )
}