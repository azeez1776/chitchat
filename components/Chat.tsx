import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {ChatItem} from './ChatItem'

type ChatProps = {
    username:string;
    image:string;
}

const Chat = ({username, image}: ChatProps) => {

    const [chatInput, setChatInput] = useState('');
    const [chatItemList, setChatItemList] = useState<ChatItem[]>([]);

    return (
        <View style={{marginTop:200, alignSelf:'center'}}>
            <Text>Hello {username} just seconds to start chatting</Text>
        </View>
    )
}

export default Chat
