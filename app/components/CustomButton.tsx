import {Text, TouchableOpacity, View} from 'react-native';

const CustomButton = ({title, onPress, containerStyles, textStyles}) => {
    return (
        <TouchableOpacity
            style={containerStyles}
            onPress={onPress}
            activeOpacity={0.8}>
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>

    )
}

export default CustomButton;