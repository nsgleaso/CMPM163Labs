# CMPM163Labs

This is my (Nicholas Gleason) repository for all lab projects for CMPM 163 of Spring Quarter 2020

## Lab 8
For this lab, I did part 2 (Three.js City Building)

My partner, Matthew Hoover, did Part 1.  For his creative portion, Matthew created a medieval style village by generating cabins with spaced out grassy areas.  I really liked the models that Matthew used, in that it really reminded me of games like Skyrim.  The main thing I learned from Matthew's project is how to create procedurally generated and highly detailed villages/cities.

In the original image, I was inspired by the two groups of tall buildings, trees near the lower buildings, and the large hill in the background.  As a result, I made a custom heightmap for the city in a way that two groups of tall buildings, and smaller "park" areas would form.  In addition, I also create a second plane with it's own heightmap and texture for the hills in the background.

Link to inspirational image: https://drive.google.com/file/d/18dtpHenl_OwiiPcB2RZHSCdIXG7kILP1/view?usp=sharing

Link to Custom City Screenshot: https://drive.google.com/file/d/1JVtLpjQZNW05Zmb2Y90EaY-3BCTp0cXi/view?usp=sharing

Another Screenshot from a different angle: https://drive.google.com/file/d/1XCB0Q6cinyjq4GVpripAFXZGe1Z9JdXG/view?usp=sharing


## Lab 7
For this lab, I did part 2 (Three.js Mesh Manipulation)

Unfortunately, I was not able to get in contact with my partner.  I could not find his email nor his name on the class discord.

Link to part A screenshot of texture: https://drive.google.com/file/d/1TZOVGxZ5STnprvOwIwsycyXkVOj3crdj/view?usp=sharing

Link to part A screenshot of height map: https://drive.google.com/file/d/1SxFTJx398XhIzAwTsihElwAi_ov5dtll/view?usp=sharing

Link to part B capture of wave effect: https://drive.google.com/file/d/1_4QJ2bbDcAUvX0ma6PinYd7sApo1FRvj/view?usp=sharing

Link to part C capture of custom mesh manipulation: https://drive.google.com/drive/u/1/folders/15yyYmL8W4QxRNdfc2ZWVrLDtC38szA8G

## Lab 6
For this lab, I did part 2 (the shadertoy project)

Link to screenshot of texture with corrected aspect ratio: https://drive.google.com/file/d/17AOHBTRVl4YaDzway-gUg2h3B7T7zp6V/view?usp=sharing

Link to shadertoy project with textured circle: https://www.shadertoy.com/view/3dfBDs

Link to cool blackhole shader found on shadertoy: https://www.shadertoy.com/view/3slcWr

## Lab 5
For this lab, I did Part 2 (the Three.js project)

Link to Part A: https://drive.google.com/file/d/1aFUX73jFgzkhsL4kgoXkHjK9wiOiJ8G3/view?usp=sharing

Link to Part B: https://drive.google.com/file/d/16oih9PNAA7MsW9t_9S-AEGau3z54Q39P/view?usp=sharing

Link to Part C (my particle effect): https://drive.google.com/file/d/13zUleRhFueq8A1duuYCDa3dK8xnd037r/view?usp=sharing
- For Part C, I made all of the y velocity values for the particles negative so that way they fall slowly. When a particle reaches the bottom of the screen, it is respawned back at the top so that way the scene is endlessly snowing.  In addition, the particles drift occasionally from left to right. I also added a snowflake sprite to the particles so that way it makes it look like snow is falling. 

## Lab 4
Link to Capture: https://drive.google.com/file/d/1bPI3MdOv0q_Cn4KNy-NUdXCaTGNYMFqy/view?usp=sharing

Description of Cubes:
- Left Cube: Part 1 Tutorial w/o normal map
- Center Cube: Part 1 Tutorial w/ normal map
- Top Cube: Part 1 myTexture w/ my normal Map
- Right Cube: Part 2 Tutorial Shader Texture
- Bottom Cube: Part 2 Tiled Shader Texture

Answers to step 24:
- A. x = 7u
- B. y = 7 - 7v
- C. white

## Lab 3

Link to Capture: https://drive.google.com/file/d/18G5C1GARodSfN0K0Q738V8aniOBj6Hjb/view?usp=sharing

Description of Cubes:

- Left Cube = This is my own shader where I made the time (u_time) and resolution of the renderer (u_resolution) alternate the color gradients of the cube.  The RGB values are set equal to the absolute value of sin(u_time) or cos(u_time) which is then multiplied by gl_FragCoord.x/u_resolution.
- Top Cube = this is my own part 1 cube.  For the material, I set the wireframe of the material to true, and added a light blue specular attribute to it.  As a result, the wireframe shines with a tinge of blue.
- Middle Cube = This is the part 1 tutorial cube.  the code is unchanged.
- Right Cube = This is the part 2 tutorial cube.  The only change that I made is the color interpolation, in that it is now red and blue.

## Lab 2

Link to Part 1 Video: https://drive.google.com/file/d/1YCGIwYGkGstwwTIOj-Kz_fDuFxAumllf/view?usp=sharing

Part 2 Screenshot:
![](lab2/lab2Part2Screenshot.PNG)
