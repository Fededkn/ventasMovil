import React from 'react'
import { View, ActivityIndicator} from 'react-native'
import { colors } from '../Global/colors'

const Loading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'white' }}>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default Loading
