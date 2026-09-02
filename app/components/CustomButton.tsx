import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

const CustomButton = ({title, onPress, containerStyles, textStyles, icon}) => {
    return (
        <TouchableOpacity
            style={containerStyles}
            onPress={onPress}
            activeOpacity={0.8}>
            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
              {icon && (
                <Ionicons size={28} name="camera-outline" color='red' style={{marginRight: 10}} />
              )}
              <Text style={textStyles}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default CustomButton;