---
comments: false
title: 東京大学 情報理工学系研究科 創造情報学専攻 2018年8月実施 筆記試験 第3問
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2018年8月実施 筆記試験 第3問

## **Author**
[tomfluff](https://github.com/tomfluff)

## **Description**
Select **four items** out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines of text. If necessary, use examples or figures.

1. **Inverse kinematics**
2. **Hidden Markov model**
3. **MinMax algorithm**
4. **NP complete problem**
5. **Ray tracing**
6. **SIMD (Single Instruction Multiple Data)**
7. **Call by value and call by reference**
8. **Public-key cryptography**

## **Kai**
### Inverse kinematics
Inverse kinematics is the usage of kinematic equasions to determine the motions of a robot in order to reach a desired position. Kinematics itself is the study of motion regardless of the cause of the motion, such as forces and torques. Use cases can include the motion of picking bins or items from the assembly line. Given a starting joint position and a desired position, inverse kinematics can determine the join movement needed to achieve that.

### Hidden Markov model
Hidden Markov model is a statistical model based on Markov chains which describes a situation where there exists hidden states and observed states. A correlation is assumed on the visible states regarding the hidden states. Given a sequence of states (visible), the Markoc model helps us calculate the hidden state sequence with the highest probability. It is used a lot in NLP, speech recognition and computer vision.

### MinMax algorithm
In computer science MinMax (a.k.a MiniMax) algorithm is an algorithm for choosing the "best" move to make in a game given a score on any state of the game board. Player 1 has a goal of maximising the score value while Player 2 attemps to minimise the score value (when Player 1 is the active player). The MinMax algorithm uses a tree-like stracture where all possible moves of a player are the child nodes. The tree ends in a leaf if either the game has finished or a certain depth was reached when it is defined. the current player (Player 1) will choose the next move where the highest score was achieved. An alteration to the algorithm to save of computation is called AlphaBeta Pruning.

### NP complete problem
NP complete problem is defined based on the followeing criteria:
1. It is NP hard, meaning that any algorithm will not run in polinomiyal time.
2. Any other problem in NP is reducable to it.

One such problem which is NP-complete is the 3-CNF-SAT problem which given a 3-CNF, need to find if there is a setting where the the 3-CNF is satisfied. Another NP-complete problem is finding a maximal clique in an undirected graph. Given an undirected graph, want to find the maximal clique in the graph.

### Ray tracing
Ray tracing is a process which attempts to approximate natural light in the physical world. It calculates light bounces from object to object by tracing the light ray, when the ray intersects with an object it affects color, reflections and so on, bounces and continues. Compared to the real world, instead of all light emmited rays being examined when reaching the "eye", the model is reversed and rays are being "shot" from the "eye" (the camera) to the objects.

### SIMD (Single Instruction Multiple Data)
In computer architecture SIMD is a type of architecture which refers to the ability to use a single instruction on multiple data elements at the same time. This is a sort of parallelism capability which enables faster overall computation. Is it helpful in 3D graphics, 3D physics, image processing, signal processing, media encoding/decoding and more. 

### Call by value and call by reference
In programming languages there are two different approaches to passing argument to a function. Call by reference means that a reference to the object is passed and any changes done internally in the function will also be visible outside of the function. On the other hand call by value refers to functions which get a copy of the data which is independant from the original data and any changes done in the functions will not remain after the function has finished its execution.

### Public key cryptography
Public key cryptography refers to an encryption and security algorithm which uses a public key and a private key to secure a communication between two sides. Each side has a private key which is not revealed and a public key which is known. This method relies on the difficulty of decomposing a number which is the result of a multiplication of large prime numbers, as well as the traits of modulu operations. An example of such an encryption is the RSA encription.