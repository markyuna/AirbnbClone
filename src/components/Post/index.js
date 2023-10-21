import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

// const days = 7;

const Post = (props) => {
  console.log(props);

  const post = props.post;

//   const navigation = useNavigation();

//   const goToPostPage = () => {
//     navigation.navigate('Post', {postId: post.id});
//   }

  return (
    // <Pressable onPress={goToPostPage} style={styles.container}>
    <View style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{uri: 'https://res.cloudinary.com/dxrttyi2g/image/upload/v1680902152/76gx97qukwafh97jtnle161l67bb.jpg'}}
      />

      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {/* {post.type}. {post.title} */}
        Entire flat. Puerto de la Cruz lorem simpli text uri barvcelona gran cuarto
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.price}>$30</Text>
        / night
      </Text>

      {/*  Total price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;