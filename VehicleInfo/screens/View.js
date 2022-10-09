import { View, Text, FlatList,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function View() {
  return (
    <View style={{padding:20}}>
            <FlatList
                data={posts}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{borderWidth:1, marginBottom:'5%', padding:5}} onPress={()=>{navigation.navigate("UpdateDelete",{obj:item})}}>
                        <Text style={{marginBottom:10,fontWeight:'bold',color:'black'}} >{item.title}</Text>
                        <Text style={{marginBottom:10,color:'black'}} >{item.body}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
  )
}