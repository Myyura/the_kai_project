---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2021年8月実施 専門科目 S-4
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2021年8月実施 専門科目 S-4

## **Author**
[Isidore](https://github.com/heacsing)

## **Description**
<figure style="text-align:center;">
  <img src="https://s2.loli.net/2024/07/04/rapzlA8cqOFoCPQ.png" width="640"/>
</figure>


## **Kai**
### 設問1

$$
C(a_1) = 00,\;C(a_2) = 01,\;C(a_3) = 10,\;C(a_4) = 110,\;
$$

### 設問2

By the definition, we have
$$
\bar{N} = \sum_{i=1}^np_il_i,\;l_i = N(p) = \lceil-\log_2p_i\rceil
$$

Insert the $l_i$, we immediately have

$$
\bar{N} = \sum_{i=1}^np_i\lceil\log_2\frac{1}{p_i}\rceil
$$

Given $\lceil\log_2\frac{1}{p_i}\rceil \geq \log_2\frac{1}{p_i}$, we have

$$
\bar{N} = \sum_{i=1}^np_i\lceil\log_2\frac{1}{p_i}\rceil \geq \sum_{i=1}^np_i\log_2\frac{1}{p_i} = H(S) 
$$

Similarly, as $\lceil\log_2\frac{1}{p_i}\rceil < \log_2\frac{1}{p_i} +1$, we have

$$
\bar{N} < \sum_{i=1}^np_i(\log_2\frac{1}{p_i}+1) = \sum_{i=1}^np_i\log_2\frac{1}{p_i} + \sum_{i=1}^np_i = H(S) + 1
$$

### 設問3
Sequences are:

$$
\{\frac{1}{2},\frac{1}{4},\frac{1}{8},\frac{1}{16},\frac{1}{32},\frac{1}{32}\}
$$

$$
\{\frac{1}{2},\frac{1}{4},\frac{1}{16},\frac{1}{16},\frac{1}{16},\frac{1}{16}\}
$$

$$
\{\frac{1}{4},\frac{1}{4},\frac{1}{8},\frac{1}{8},\frac{1}{8},\frac{1}{8}\}
$$

Now, by the first sequence, we have a $C$ as

$$
\{0,10,110,1110,11110,11111\}
$$

### 設問4&設問5
omitted


