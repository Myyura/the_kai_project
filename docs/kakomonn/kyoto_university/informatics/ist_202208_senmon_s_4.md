---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2022年8月実施 専門科目 S-4
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2022年8月実施 専門科目 S-4

## **Author**
[Isidore](https://github.com/heacsing)

## **Description**
<figure style="text-align:center;">
  <img src="https://s2.loli.net/2024/07/01/7wrBFAyl6jYgT8k.png" width="480"/>
</figure>


## **Kai**
### (1)
To make the number of states minimum, a possible solution is:

$$
S_1=\{0, 1\}
$$

while the transition diagram is

<figure style="text-align:center;">
  <img src="https://s2.loli.net/2024/07/01/6ytJrZlpeEbfUsc.png" width="240"/>
</figure>

### (2)
For the same reason, we propose the solution

$$
S_2 = \{000, 001, 010, 101, 100\}
$$
while the transition diagram is 

<figure style="text-align:center;">
  <img src="https://s2.loli.net/2024/07/01/ufo1tsFMTUGwB3N.png" width="360"/>
</figure>

Reasons:
  
  - For the state $001$ which is the only one state that ends with $1$, it's not probable to transit from it to a state that starts with $1$. So $S_2$ won't output any sequences including $11$.
  - For the state $000$ which is required to output $0000$-included sequences, it's not probable to transit from is to a state that starts with $0$. So $[C_2]$ is satisfied.

### (3)

$$
P_{S_2} = \begin{bmatrix}
    0 & 0 & q & 1-q & 0 \\
    p & 0 & 0 & 0 & 1-p \\
    0 & 0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 0 & 1 \\
    0 & 1 & 0 & 0 & 0 \\
\end{bmatrix}
$$

### (4)

$$
q = \frac{1}{p^2+2p+2}\begin{bmatrix}
    p & 1 & p^2 & p & 1 \\
\end{bmatrix}
$$

### (5)

$$
H(S_2) = \frac{1}{p^2+2p+2}[\log(p^2+2p+2)-(2p^2+2p)\log p]
$$