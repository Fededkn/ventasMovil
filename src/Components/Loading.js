import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'white' }}>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default Loading
