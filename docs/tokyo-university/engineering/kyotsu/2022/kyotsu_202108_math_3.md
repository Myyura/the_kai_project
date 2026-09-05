---
sidebar_label: '2021年8月実施 数学3'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2021年8月実施 数学3

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/graduate/2022/kakomon/2022_M_3.pdf)

### I.
1. $f(z)=z/[(z-i)(z-1)]$ を、$1$ の周囲を反時計回りに一周し、$i$ の周囲を時計回りに一周する図の閉路 $C$ で積分する。

![Equivalent contour with the original winding directions](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2022/tokyo-kyotsu-202108-contour.svg)

図は原図と同じ巻き数をもつ模式図である。

2. $I_2=\int_0^{2\pi}d\theta/(10+8\cos\theta)$ について、(2.1) 単位円の反時計回り積分 $\oint G(z)dz$ に直して $G$ を求め、(2.2) 全特異点を求め、(2.3) 留数定理で $I_2$ を計算する。

### II.
$N\ge1$ 個の製品を順に観測する。各製品は互いに独立に確率 $\phi\in[0,1]$ で欠陥品となる。欠陥なら $v_i=1$、そうでなければ $v_i=0$ とし、$\boldsymbol v=(v_1,\ldots,v_N)$ の1の個数を $N_d(\boldsymbol v)$ と書く。

1. $\phi$ のもとで、この特定の列 $\boldsymbol v$ が生じる確率を求める。
2. $\phi$ の事前分布を $\operatorname{Beta}_{a,b}$（$a,b>1$）とし、列の条件付き確率を $Q(\boldsymbol v\mid\phi)$、周辺確率を $Q_{a,b}(\boldsymbol v)$ とする。観測後の $\phi$ の密度を表す。
3. 1.の尤度と $a=2,b=50$ を使い、$Q_{2,50}(\boldsymbol v)$ を求める。
4. その事後分布がベータ分布となることを示し、パラメータ $a',b'$ を求める。
5. 事後密度を最大にする $\phi$ を求める。

ここで $\operatorname{Beta}_{a,b}(x)=x^{a-1}(1-x)^{b-1}/B(a,b)$（$0\le x\le1$）、$B(a,b)=\int_0^1t^{a-1}(1-t)^{b-1}dt$。ベイズの公式 $\pi(\phi\mid\boldsymbol v)=\pi(\phi)Q(\boldsymbol v\mid\phi)/Q_{a,b}(\boldsymbol v)$ を利用する。

### 题目描述

1. 第一小题的被积函数为

   $$
   f(z)=\frac{z}{(z-i)(z-1)}.
   $$

   积分路径分别以逆时针方向绕 $z=1$、以顺时针方向绕 $z=i$；要求计算相应闭合积分 $I_1$。闭路绕行方向见上图。
2. 第二小题先用 $z=e^{i\theta}$ 把

   $$
   I_2=\int_0^{2\pi}\frac{\mathrm d\theta}{10+8\cos\theta}
   $$

   化为单位圆上的围道积分，求有理函数

   $$
   G(z)=\frac{-i}{2(z+2)(2z+1)}
   $$

   的奇点、单位圆内极点的留数并计算 $I_2$。
3. 第二部分依次观察 $N\ge1$ 个产品，各产品独立以概率 $\phi\in[0,1]$ 为次品。次品记 $v_i=1$，否则为0，$N_d(\boldsymbol v)$ 为指定序列 $\boldsymbol v=(v_1,\ldots,v_N)$ 中1的个数。
   1. 求这一特定序列在给定 $\phi$ 时的概率。
   2. 先验为 $\operatorname{Beta}(a,b)$、$a,b>1$，利用 Bayes 公式表示后验密度。
   3. 取 $a=2,b=50$，求该序列的边缘概率。
   4. 证明后验仍为 Beta 分布，求两个参数。
   5. 求使后验密度最大的 $\phi$。

   这里 $\operatorname{Beta}_{a,b}(x)=x^{a-1}(1-x)^{b-1}/B(a,b)$，$B(a,b)=\int_0^1t^{a-1}(1-t)^{b-1}\,dt$。

## **Kai**
### I.
#### 1.
$I_1$ の被積分関数

$$
\begin{aligned}
f(z) = \frac{z}{(z-i)(z-1)}
\end{aligned}
$$

の極 $z=1,i$ における留数はそれぞれ

$$
\begin{aligned}
R_1 &= \frac{1}{1-i} = \frac{1+i}{2}
, \\
R_i &= \frac{i}{i-1} = \frac{1-i}{2}
\end{aligned}
$$

である。

$I_1$ は $z=1$ の周りを反時計回りに回る部分と $z=i$ の周りを時計回りに回る部分からなるから、

$$
\begin{aligned}
I_1
&= 2 \pi i \left( R_1 - R_i \right)
\\
&= -2 \pi
\end{aligned}
$$

である。

#### 2.
##### 2.1
$|z|=1$ を満たす複素数 $z$ は、 $z=e^{i \theta} \ \ (0 \leq \theta \lt 2 \pi)$ と書ける。
このとき、

$$
\begin{aligned}
dz &= i e^{i \theta} d \theta = iz d \theta
\\
z + \frac{1}{z} &= e^{i \theta} + e^{-i \theta} = 2 \cos \theta
\end{aligned}
$$

であるから、

$$
\begin{aligned}
I_2
&= \oint_{|z|=1} \frac{1}{10 + 4 \left( z + \frac{1}{z} \right)} \frac{dz}{iz}
\\
&= \oint_{|z|=1} \frac{-i}{2(z+2)(2z+1)} dz
\end{aligned}
$$

よって、

$$
\begin{aligned}
G(z) = \frac{-i}{2(z+2)(2z+1)}
\end{aligned}
$$

である。

##### 2.2
$G(z)$ の特異点は $z=-1/2, -2$ である。

##### 2.3
$G(z)$ の $z=-1/2$ における留数は $-i/6$ であるから、留数定理により、

$$
\begin{aligned}
I_2 = 2 \pi i \cdot \frac{-i}{6} = \frac{\pi}{3}
\end{aligned}
$$

を得る。

### II.

#### 1.
$k=N_d(\boldsymbol v)$ とおくと、独立性より

$$
Q(\boldsymbol v\mid\phi)
=\phi^k(1-\phi)^{N-k}.
$$

#### 2.

$$
\pi(\phi\mid\boldsymbol v)
=\frac{Q(\boldsymbol v\mid\phi)\operatorname{Beta}_{a,b}(\phi)}{Q_{a,b}(\boldsymbol v)},
\qquad
Q_{a,b}(\boldsymbol v)
=\frac{B(a+k,b+N-k)}{B(a,b)}.
$$

#### 3.
$a=2,b=50$ のとき

$$
Q_{2,50}(\boldsymbol v)
=\frac{B(k+2,N-k+50)}{B(2,50)}
=\frac{50\cdot51\,(k+1)!(N-k+49)!}{(N+51)!}.
$$

#### 4.

$$
\pi(\phi\mid\boldsymbol v)
=\operatorname{Beta}_{k+2,N-k+50}(\phi),
$$

すなわち $a'=k+2, b'=N-k+50$ である。

#### 5.
$a',b'>1$ なので、事後確率を最大にする値は

$$
\boxed{\phi=\frac{a'-1}{a'+b'-2}=\frac{k+1}{N+50}}.
$$
