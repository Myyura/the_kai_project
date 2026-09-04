---
sidebar_label: "2019年8月実施 数理科学 II [3]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 II \[3\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$\{c_k\}_{k=0}^\infty$ を実数列とする。

(1) $\sum_{k=0}^\infty|c_k|<\infty$ ならば $\sum_{k=0}^\infty c_k\cos kx$ は各 $x\in\mathbb R$ で収束し、その和は連続であることを示せ。

(2) $\sum_{k=0}^\infty k|c_k|<\infty$ ならば同級数は各 $x\in\mathbb R$ で収束し、その和は連続的微分可能であることを示せ。

## **Kai**

### (1)
$|c_k\cos kx|\le|c_k|$ なので、Weierstrass の M 判定法により $\mathbb R$ 上一様収束する。各項は連続であり、一様極限も連続である。

### (2)
$\sum_{k\ge1}|c_k|\le\sum_{k\ge1}k|c_k|<\infty$ だから元の級数は一様収束する。また

$$
|-kc_k\sin kx|\le k|c_k|
$$

より導関数の級数も一様収束する。項別微分定理から、和 $F$ は

$$
F'(x)=-\sum_{k=1}^\infty kc_k\sin kx
$$

を満たし、右辺は連続である。ゆえに $F\in C^1(\mathbb R)$。
