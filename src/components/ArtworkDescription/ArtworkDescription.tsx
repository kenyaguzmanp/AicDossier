import React from "react";
import Accordion from "../Accordion/Accordion";
import { View } from "react-native";
import { Text } from "react-native-paper";

const ArtworkDescription = ({ artwork }) => {
  return (
    <>
      <View style={{ padding: 20 }}>
        {artwork.title && <Text variant="headlineMedium">{artwork.title}</Text>}
        {artwork.place_of_origin && <Text variant="titleMedium" >{artwork.place_of_origin}</Text>}
        {artwork.artist_title && <Text variant="titleMedium" >{artwork.artist_title}</Text>}
        {artwork.medium_display && <Text variant="titleMedium" >{artwork.medium_display}</Text>}
      </View>
      {artwork.artist_display && (<Accordion title={"Artist"} items={[ {title: artwork.artist_display } ]} />)}
      {artwork.publication_history && (<Accordion title={"Publication History"} items={[ {title: artwork.publication_history } ]} />)}
      {artwork.dimensions && (<Accordion title={"Dimensions"} items={[ {title: artwork.dimensions } ]} />)}
      {artwork.style_title && (<Accordion title={"Style"} items={[ {title: artwork.style_title } ]} />)}
    </>
  )
}

export default ArtworkDescription;