import React, { useEffect, useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { enhancedFetchArtworks } from "../../api/services";
import { useDispatch } from "react-redux";
import AicIcon from "../../components/AicIcon/AicIcon";
import { WIDTH } from "../../theme";
import { Divider, Text } from "react-native-paper";
import Table from "../../components/Table/Table";
import Images from "../../static/images/images";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../ScreenNames";
import ChevronRight from "../../components/ChevronRight/ChevronRight";
// import { cleanArtworks } from "../../store/slices/artworksSlice";
import i18n from "../../i18n/locales";

const Home = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    enhancedFetchArtworks({
      serviceParams: {
        page: 1,
        fakeService: true
      },
      setLoadingState: setIsLoading,
      onSuccess: () => {
        setIsLoading(true);
      }
    });

  }, []);

  const tableData = {
    columns: [
      {
        title: "Day",
      },
      {
        title: "Hour",
      }
    ],
    items: [
      {
        key: 1,
        name: "Mon",
        value: "11–5",
      },
      {
        key: 2,
        name: "Tue–Wed",
        value: "Closed",
      },
      {
        key: 3,
        name: "Thu",
        value: "11–5",
      },
      {
        key: 4,
        name: "Fri–Sun",
        value: "11–8",
      },
    ]
  };

  return (
    <ScrollView>
      <AicIcon isSelected={isLoading} width={WIDTH} height={500} />
      <Text variant="displayLarge">{i18n.t("WELLCOME")}</Text>
      <Text variant="displaySmall">{i18n.t("THE_COLLECTION")}</Text>
      <Text variant="bodyLarge">{i18n.t("HOME_DESCRIPTION")}</Text>
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => navigation.navigate(ScreenNames.Artworks)}>
        <Text variant="titleLarge">{i18n.t("HOME_LINK_1")}</Text>
        <View style={{ paddingHorizontal: 20 }}>
          <ChevronRight />
        </View>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => navigation.navigate(ScreenNames.FavoritesArtworks)}>
        <Text variant="titleLarge">{i18n.t("HOME_LINK_2")}</Text>
        <View style={{ paddingHorizontal: 20 }}>
          <ChevronRight />
        </View>
      </TouchableOpacity>
      <Text variant="displaySmall">{i18n.t("HOME_TITLE_2")}</Text>
      <Table data={tableData}/>
      <Text variant="displaySmall">{i18n.t("HOME_TITLE_3")}</Text>
      <Text variant="titleSmall">{i18n.t("HOME_LOCATION_TEXT_1")}</Text>
      <Text variant="bodySmall">{i18n.t("HOME_LOCATION_TEXT_2")}</Text>
      <Text variant="titleSmall">{i18n.t("HOME_LOCATION_TEXT_3")}</Text>
      <Text variant="bodySmall">{i18n.t("HOME_LOCATION_TEXT_4")}</Text>
      <Image style={{ width: WIDTH, height: 300 }} source={Images.AIC_LION} />

      {/* <Text
        onPress={() => {
          enhancedFetchArtworks({
            serviceParams: {
              page: 1
            }
          });
        }}
      >
        fetch artworks
      </Text>
      <Text onPress={() => dispatch(cleanArtworks())}>Clean Artworks</Text> */}

    </ScrollView>
  );
}

export default Home;
