import { Image as RNImage } from "react-native";

import { Canvas, Image, useVideo } from "@shopify/react-native-skia";
import React, { useState } from "react";
import { Pressable, useWindowDimensions } from "react-native";
import { CRT } from "./CRT";

const clip = require("../clip.mp4");
const exampleImageUri = RNImage.resolveAssetSource(clip).uri;

export default function RootLayout() {
  const [isShaderApplied, setIsShaderApplied] = useState(true);
  const { width, height } = useWindowDimensions();
  const { currentFrame } = useVideo(exampleImageUri, {
    volume: 10,
    looping: true,
  });

  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={() => {
        setIsShaderApplied(!isShaderApplied);
      }}
      onLongPress={() => {}}
    >
      <Canvas style={{ flex: 1 }}>
        <CRT isShaderApplied={isShaderApplied}>
          <Image
            image={currentFrame}
            x={0}
            y={0}
            width={width}
            height={height}
            fit={"fill"}
          />
        </CRT>
      </Canvas>
    </Pressable>
  );
}
