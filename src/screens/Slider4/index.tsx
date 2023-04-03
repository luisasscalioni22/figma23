import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import React from 'react';
import { ComponentButtonSlider } from '../../components';
import { ComponentListMarker } from '../../components';
import { ComponentTitleSlider} from '../../components';
import { styles } from './styles';
export function Slider4({ setPageI }: IPage) {
    const slide1 = require("../Slider4/styles")
    const slide1Texts = [
        { id: '1', text: 'Selecione seus interesses.'},
        { id: '2', text: 'Utilize a busca para achar suas inspirações.'},
        { id: '3', text: 'Separe suas pastas por assunto.'},
    ]
    return (
        <ImageBackground source={slide1} style={styles.container}>
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Operação Eficiente' />
                <FlatList
                    data={slide1Texts}
                    renderItem={({ item }) =>
                        <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} cor={false} />
                <ComponentButtonSlider onPressI={() => setPageI(2)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(4)} cor={true}/>
                <ComponentButtonSlider onPressI={() => setPageI(5)} cor={false}/>
            </View>
        </ImageBackground>
    );

}