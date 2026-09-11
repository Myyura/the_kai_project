---
sidebar_label: '2011年8月実施 物理学 第3問'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Virial-Expansion
  - Physics.Thermodynamics.Van-der-Waals-Gas
---

# 東京大学 工学系研究科 2011年8月実施 物理学 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

理想気体の状態方程式は $PV=nRT$、気体定数は $R=kN_A$ である。$P,V,n,T,k,N_A$ はそれぞれ圧力、体積、モル数、温度、ボルツマン定数、アボガドロ定数を表す。圧縮因子 $Z=PV/(nRT)$ は、不完全気体について

$$
Z=1+\frac nV B(T)+\left(\frac nV\right)^2C(T)+\left(\frac nV\right)^3D(T)+\cdots
$$

とビリアル展開できる。$B,C,D$ をそれぞれ第 2、第 3、第 4 ビリアル係数という。

### I

第 2 ビリアル係数と分子間ポテンシャル $\phi(r)$ の関係は

$$
B(T)=2\pi N_A\int_0^\infty\left[1-\exp\left(-\frac{\phi(r)}{kT}\right)\right]r^2\,dr
$$

である。正の定数 $\sigma,\varepsilon_0$ に対して

$$
\phi(r)=\begin{cases}
+\infty,&r<\sigma,\\
-\varepsilon_0(\sigma/r)^6,&r\ge\sigma
\end{cases}
$$

とするとき、$B(T)$ を求めよ。気相が維持される条件を利用してよい。

### II

van der Waals の状態方程式

$$
\left(P+\frac{an^2}{V^2}\right)\left(\frac Vn-b\right)=RT
$$

をビリアル展開し、$B(T),C(T)$ を求めよ。$a,b$ は気体固有の正の定数である。

### III

I、II の第 2 ビリアル係数を関係付けて、$a,b$ を導出せよ。

### IV

$a,b,\sigma,\varepsilon_0$ それぞれの物理的意味を説明せよ。

#### 题目描述

理想气体满足 $PV=nRT$ 且 $R=kN_A$，其中 $P,V,n,T$ 分别为压强、体积、摩尔数和温度，$k$ 为玻尔兹曼常数，$N_A$ 为阿伏伽德罗常数。真实气体的压缩因子为

$$
Z=\frac{PV}{nRT}=1+\frac nVB(T)+\left(\frac nV\right)^2C(T)+\left(\frac nV\right)^3D(T)+\cdots.
$$

$B,C,D$ 分别称为第二、第三、第四维里系数。

I. 已知

$$
B(T)=2\pi N_A\int_0^\infty[1-e^{-\phi(r)/(kT)}]r^2\,dr,
\qquad
\phi(r)=\begin{cases}+\infty,&r<\sigma,\\-\varepsilon_0(\sigma/r)^6,&r\ge\sigma,\end{cases}
$$

其中 $\sigma,\varepsilon_0>0$。求 $B(T)$，可利用保持气相的条件进行近似。

II. 对范德瓦耳斯方程

$$
\left(P+\frac{an^2}{V^2}\right)\left(\frac Vn-b\right)=RT
$$

作维里展开，求 $B(T),C(T)$，$a,b$ 为气体特有的正常数。

III. 比较 I、II 的第二维里系数，导出 $a,b$。

IV. 解释 $a,b,\sigma,\varepsilon_0$ 的物理意义。

## **Kai**

### I

$u=\varepsilon_0/(kT)$ と置き、積分を $r=\sigma$ で分ける。引力部分の指数関数を展開すると

$$
\begin{aligned}
B(T)
&=\frac{2\pi N_A\sigma^3}{3}
-2\pi N_A\sum_{j=1}^\infty\frac{u^j\sigma^{6j}}{j!}
\int_\sigma^\infty r^{2-6j}\,dr\\
&=\frac{2\pi N_A\sigma^3}{3}
\left[1-\sum_{j=1}^\infty\frac{u^j}{j!(2j-1)}\right].
\end{aligned}
$$

高温の気相で $u\ll1$ とする一次近似では、

$$
\boxed{B(T)\simeq\frac{2\pi N_A\sigma^3}{3}
\left(1-\frac{\varepsilon_0}{kT}\right)}.
$$

### II

$c=n/V$ と置くと、

$$
P=\frac{cRT}{1-bc}-ac^2,
\qquad
Z=\frac1{1-bc}-\frac{a}{RT}c
=1+\left(b-\frac a{RT}\right)c+b^2c^2+\cdots.
$$

したがって

$$
\boxed{B(T)=b-\frac a{RT}},
\qquad
\boxed{C(T)=b^2}.
$$

### III

I の一次近似と係数を比較し、$R=kN_A$ を用いると

$$
\boxed{b=\frac{2\pi}{3}N_A\sigma^3},
\qquad
\boxed{a=\frac{2\pi}{3}N_A^2\varepsilon_0\sigma^3}.
$$

### IV

- $\sigma$：分子中心同士が近づける最小距離、すなわち剛体球としての分子直径。
- $\varepsilon_0$：接触距離 $r=\sigma$ における引力ポテンシャルの深さ。
- $b$：分子の有限な大きさによる 1 モル当たりの排除体積補正。剛体球の実体積の 4 倍に相当する。
- $a$：分子間引力の強さを表す圧力補正係数。引力による圧力低下は $a(n/V)^2$ である。

