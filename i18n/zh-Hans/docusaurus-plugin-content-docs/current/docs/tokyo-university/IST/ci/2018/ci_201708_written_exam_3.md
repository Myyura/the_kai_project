---
sidebar_label: '2017年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2017年8月実施 筆記試験 第3問

## **Author**
[tomfluff](https://github.com/tomfluff)

## **Description**
Select **four items** out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines of text. If necessary, use examples or figures.

1. **Pipeline hazard**
2. **Register renaming**
3. **Kalman filter**
4. **Regular grammer and regular languages**
5. **Public key cryptography and certification authority**
6. **Traveling salesman problem**
7. **Divide and conquer method**
8. **Vector quantization**

## **Kai**
### Pipeline hazard
Pipeline hazard refers to a situation where dependencies in a program result in incorrect execution on the pipeline architecture. There are several types of hazards:
1. **Structure hazard** - Occures when two commands attempt to access the same memory component at the same time.
2. **Data hazard** - Occures when a command attempts to use data which has not been finalized yet.
3. **Control hazard** - Occures when executing a command results in an unwanted jump in the flow of commands (harms the natural order of execution).

### Register renaming
Register renaming is a process which helps solve data dependency hazards. The concept is about seperating the architectural registers (which the program uses) with the physical registers (which exist in the machine). Register renaming rewrites the program to use physical registers based on the actual allocation of the value at that moment. It uses a table called Register Allocation Table (RAT), which tells which physical registers hold the value of the architectual registers at a given moment. It maximises the prediction by comparing the past estimations with the actual meassured readings and adjusts accordingly.

### Kalman filter
Kalman filters, used a lot in signal processing, guidance and location estimation, computer vision and others. It is an optimal estimation algorithm, in situations with even noisy meassurements. It uses probability and estimation over the noise and disturbances to generate an optimal estimation. 

### Regular grammar and regular languages
A regular language is a language over a regular grammer which there exists a finite state automata which accepts it. A regular grammer is defined by $G={V,T,S,P}$ where:
- $V$ are variables or non terminal symbols.
- $T$ are terminal symbols.
- $S$ is a start symbol.
- $P$ is the production rule for all symbols.

### Public key cryptography and certification authority
Public key cryptography refers to a type of security mechanism for a secured message exchange over a public channel between two entities. It uses a private key for each side and a shared public key. The method takes advantage of the difficulty to guess the decomposition of a large number which was a composition of two large prime numbers, as well as modulu operation. The certification authority refers to an entity which can authenticate the trust of a web entity. It is used in regards to SSL for example where a web provider issues a certification with the authority for a secured connection between it and the client. The client uses the certification authority to validate the certificate of the service.

### Traveling salesman problem
A classic problem in computer science, which describes a travelling salesman who wants to get the shortest path through all cities and back to the start. Let our cities be ${a,b,c,d}$ a possible path would be $a\rightarrow b \rightarrow c \rightarrow d \rightarrow a$. This is an NP-hard problem which cannot be solved in polinomiyal time. Some heuristic solution exist which reduce the runtime but may not find the optimal solution.

### Divide and conquer method
Divide and conquer approach refers to an approach in algorithms where for a given problem, you split it into equally sized problems, solve these and combine the solution to solve the bigger problem. An example of a divide and conquer algorithm is Merge Sort. For `N` elements, you divide into two sets of `N/2` (or `N/2 + 1`) elements and combine the solutions.

### Vector quantization
Used in compression algorithms. Vector quantization refers to the process of assigning representatives (codewords) to groups of vectors based on distance. Such that $V_i(x)=\{y_i:||x-y_i||<||x-y_j||\space for\space j\neq i\}$ for $x\in R^k$ vector of dimension $k$. This allows to generate a lossy compression when used. Vector quantixation defines an encoder, decoder and a codebook to generate the codeword domain.