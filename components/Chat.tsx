import React from 'react'
import { View, Text } from 'react-native'

type ChatProps = {
    username:string;
    image:string;
}

const Chat = ({username, image}: ChatProps) => {

    return (
        <View style={{marginTop:200, alignSelf:'center'}}>
            <Text>Hello {username} just seconds to start chatting</Text>
        </View>
    )
}

export default Chat
