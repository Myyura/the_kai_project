---
sidebar_label: '2021年8月実施 数学3'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2021年8月実施 数学3

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[2022年度大学院入学試験問題数学 3 ](https://github.com/Myyura/the_kai_project_assets/blob/2672b44819e556e6b7835902e6d69059ff935039/kakomonn/tokyo_university/engineering/Description/2022_M_3.pdf)

### 题目描述

原 Description 仅提供 2022 年“数学 3”原卷链接，具体题干缺失。根据本地 Kai，只能确认第一部分的两组积分：

1. 第一小题的被积函数为

   $$
   f(z)=\frac{z}{(z-i)(z-1)}.
   $$

   积分路径分别以逆时针方向绕 $z=1$、以顺时针方向绕 $z=i$；要求计算相应闭合积分 $I_1$。原路径的具体几何形状未保存在本地。
2. 第二小题先用 $z=e^{i\theta}$ 把

   $$
   I_2=\int_0^{2\pi}\frac{\mathrm d\theta}{10+8\cos\theta}
   $$

   化为单位圆上的围道积分，求有理函数

   $$
   G(z)=\frac{-i}{2(z+2)(2z+1)}
   $$

   的奇点、单位圆内极点的留数并计算 $I_2$。
3. 第二部分以 Beta$(a,b)$ 为缺陷率 $\phi$ 的先验分布，对 $N$ 次独立生产结果求似然、边际概率、后验分布及其众数。

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
