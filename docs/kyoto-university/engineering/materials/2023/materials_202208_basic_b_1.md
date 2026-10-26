---
sidebar_label: "2022年8月実施 材料基礎学B 問題1"
tags:
  - Kyoto-University
  - Physics.Quantum-Mechanics.One-Dimensional-Infinite-Square-Well
  - Physics.Quantum-Mechanics.Quantum-Observable-Expectation-and-Variance
  - Physics.Quantum-Mechanics.Heisenberg-Uncertainty-and-Minimum-Uncertainty-Gaussian
---

# 京都大学 工学研究科 材料工学専攻 2022年8月実施 材料基礎学B 問題1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%9D%90%E6%96%99%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E6%9D%90%E6%96%99%E5%9F%BA%E7%A4%8E%E5%AD%A6B_1.html) refined with GPT 6 Astra)

## **Description**

障壁が無限に高い井戸型ポテンシャル下での電子状態を考察した以下の文章を読んで、問に答えよ。

$1$ 次元運動する電子の時間に依存しない波動関数 $\psi(x)$ は、運動量演算子を $\hat p=-i\hbar\dfrac d{dx}$、ポテンシャルを $V(x)$、電子の質量を $m$ とすると、次の Schrödinger 方程式で記述される：

$$
\left\{\boxed{\text{あ}}\right\}\psi(x)=E\psi(x).\tag{1}
$$

ただし $E$ はエネルギー固有値、$x$ は位置、$i$ は虚数単位、$\hbar=h/(2\pi)$ で $h$ はプランク定数である。今、$V(x)$ が次式のように $\alpha$ を正の実定数として障壁が無限に高い、幅が $2\alpha$ の井戸型で与えられる場合を考える：

$$
V(x)=\begin{cases}
\infty&x<-\alpha\text{ または }x>\alpha\quad\text{（井戸の外側）},\\
0&-\alpha\le x\le\alpha\quad\text{（井戸の内側）}.
\end{cases}\tag{2}
$$

すなわち、井戸の外側の領域では電子は存在できず、$\psi(x)=0$ となるので、以降は井戸の内側の電子の振る舞いのみを考える。このとき、(1) 式の $\psi(x)$ の一般解は $A$ および $B$ を任意の定数として

$$
\psi(x)=A\exp\left(\boxed{\text{い}}\right)+B\exp\left(\boxed{\text{う}}\right)\tag{3}
$$

と書ける。波動関数が $x=\alpha$ および $x=-\alpha$ で連続であるという境界条件

$$
\psi(\alpha)=\psi(-\alpha)=\boxed{\text{え}}\tag{4}
$$

と (3) 式、ならびに $A$ と $B$ が同時にはゼロにならないという条件より、エネルギー固有値は $N$ を正の整数として

$$
E=\boxed{\text{お}}\tag{5}
$$

と表され、離散的な値をとることが分かる。さらに、波動関数は規格化条件

$$
\int_{-\infty}^{\infty}|\psi(x)|^2\,dx=1\tag{6}
$$

を満たす必要がある。したがって (5) 式で $N=1$ の場合、すなわちエネルギー最低状態 $E=E_1$ に対応する波動関数として

$$
\psi(x)=\boxed{\text{か}}\tag{7}
$$

が得られる。

次に、(7) 式の波動関数が位置 $x$ と運動量 $p$ に関する不確定性関係

$$
\Delta x\cdot\Delta p\ge\frac\hbar2\tag{8}
$$

を満たすことを実際に確認してみよう。ただし、$\Delta x$ および $\Delta p$ はそれぞれ、$x$ と $p$ に関する測定誤差である。観測できる物理量 $M$ の測定誤差 $\Delta M$ は、$\langle\ \rangle$ を平均操作として

$$
\Delta M=\sqrt{\langle M^2\rangle-\langle M\rangle^2}\tag{9}
$$

で与えられ、$M$ に対応する演算子を $\hat M$、$\psi(x)$ の複素共役を $\psi^*(x)$ とすれば平均操作は

$$
\langle M\rangle=\int_{-\infty}^{\infty}\psi^*(x)\hat M\psi(x)\,dx\tag{10}
$$

で与えられる。以上から、位置の平均と二乗平均としてそれぞれ

$$
\begin{aligned}
\langle x\rangle&=\boxed{\text{き}}\\
\langle x^2\rangle&=\boxed{\text{く}}
\end{aligned}\tag{11}
$$

が得られ、運動量の平均と二乗平均としてそれぞれ

$$
\begin{aligned}
\langle p\rangle&=\boxed{\text{け}}\\
\langle p^2\rangle&=\boxed{\text{こ}}
\end{aligned}\tag{12}
$$

が得られるため、

$$
\Delta x\cdot\Delta p=\boxed{\text{さ}}\cdot\hbar>\frac12\hbar\tag{13}
$$

となり、位置の測定誤差 $\Delta x$ と運動量の測定誤差 $\Delta p$ の積は井戸の幅に依存せず、確かに不確定性関係を満たすことが分かる。

また、エネルギーと運動量の関係

$$
E=\frac{p^2}{2m}\tag{14}
$$

に基づいてエネルギーの測定誤差 $\Delta E$ が決まるとすると、$\Delta E$ は (5) 式から得られる最低エネルギー $E_1$ の **[し]** 倍になっていることが分かる。

**問1** 空欄 **[あ]** を $\hat p,m,V(x)$ の中から必要なものを用いて埋めよ。

**問2** 空欄 **[い]**、**[う]** を $m,E,\hbar,x$ の中から必要なものを用いて埋めよ。

**問3** 空欄 **[え]**～**[か]** を数値または $N,\hbar,m,\alpha,x$ の中から必要なものを用いて埋めよ。

**問4** 空欄 **[き]**～**[さ]** を数値または $\hbar,m,\alpha$ の中から必要なものを用いて埋めよ。

**問5** 空欄 **[し]** を適当な数値で埋めよ。

［参考資料］必要に応じて以下を用いて良い。

$$
\int_{-\pi/2}^{\pi/2}\cos^2x\,dx=\frac\pi2
$$

$$
\int_{-\pi/2}^{\pi/2}x^2\cos^2x\,dx=\frac\pi{24}(\pi^2-6)
$$

### 题目描述

阅读下列关于无限高势垒势阱中电子状态的文章，回答问题。

设一维运动电子的不含时间的波函数为 $\psi(x)$，动量算符为 $\hat p=-i\hbar\dfrac d{dx}$，势能为 $V(x)$，电子质量为 $m$，则由下列薛定谔方程描述：

$$
\left\{\boxed{\text{あ}}\right\}\psi(x)=E\psi(x).\tag{1}
$$

其中 $E$ 为能量本征值，$x$ 为位置，$i$ 为虚数单位，$\hbar=h/(2\pi)$，$h$ 为普朗克常数。设 $\alpha$ 为正常数，考虑如下势垒无限高、宽度为 $2\alpha$ 的势阱：

$$
V(x)=\begin{cases}
\infty&x<-\alpha\text{ 或 }x>\alpha\quad\text{（阱外）},\\
0&-\alpha\le x\le\alpha\quad\text{（阱内）}.
\end{cases}\tag{2}
$$

即电子不能存在于阱外，阱外 $\psi(x)=0$，因此以下只考虑阱内电子的行为。此时，令 $A,B$ 为任意常数，式 (1) 中 $\psi(x)$ 的通解可写为

$$
\psi(x)=A\exp\left(\boxed{\text{い}}\right)+B\exp\left(\boxed{\text{う}}\right).\tag{3}
$$

由波函数在 $x=\alpha$ 和 $x=-\alpha$ 处连续的边界条件

$$
\psi(\alpha)=\psi(-\alpha)=\boxed{\text{え}},\tag{4}
$$

结合式 (3) 及 $A,B$ 不同时为零的条件，能量本征值可用正整数 $N$ 表示为

$$
E=\boxed{\text{お}},\tag{5}
$$

可见其取值离散。此外，波函数必须满足归一化条件

$$
\int_{-\infty}^{\infty}|\psi(x)|^2\,dx=1.\tag{6}
$$

因此，当式 (5) 中 $N=1$，即最低能量态 $E=E_1$ 时，对应波函数为

$$
\psi(x)=\boxed{\text{か}}.\tag{7}
$$

接下来实际验证式 (7) 的波函数满足位置 $x$ 与动量 $p$ 的不确定性关系

$$
\Delta x\cdot\Delta p\ge\frac\hbar2.\tag{8}
$$

其中 $\Delta x,\Delta p$ 分别为位置和动量的测量误差。对于可观测物理量 $M$，以 $\langle\ \rangle$ 表示取平均操作，其测量误差 $\Delta M$ 为

$$
\Delta M=\sqrt{\langle M^2\rangle-\langle M\rangle^2}.\tag{9}
$$

设 $\hat M$ 为 $M$ 对应的算符，$\psi^*(x)$ 为 $\psi(x)$ 的复共轭，则平均值为

$$
\langle M\rangle=\int_{-\infty}^{\infty}\psi^*(x)\hat M\psi(x)\,dx.\tag{10}
$$

由此，位置的平均值和平方平均值分别为

$$
\begin{aligned}
\langle x\rangle&=\boxed{\text{き}}\\
\langle x^2\rangle&=\boxed{\text{く}}.
\end{aligned}\tag{11}
$$

动量的平均值和平方平均值分别为

$$
\begin{aligned}
\langle p\rangle&=\boxed{\text{け}}\\
\langle p^2\rangle&=\boxed{\text{こ}}.
\end{aligned}\tag{12}
$$

因此

$$
\Delta x\cdot\Delta p=\boxed{\text{さ}}\cdot\hbar>\frac12\hbar,\tag{13}
$$

可见位置测量误差 $\Delta x$ 与动量测量误差 $\Delta p$ 的乘积不依赖势阱宽度，并且确实满足不确定性关系。

此外，若依据能量与动量的关系

$$
E=\frac{p^2}{2m}\tag{14}
$$

来确定能量测量误差 $\Delta E$，则 $\Delta E$ 为式 (5) 所得最低能量 $E_1$ 的 **[し]** 倍。

**问1** 用 $\hat p,m,V(x)$ 中所需的量填写 **[あ]**。

**问2** 用 $m,E,\hbar,x$ 中所需的量填写 **[い]**、**[う]**。

**问3** 用数值或 $N,\hbar,m,\alpha,x$ 中所需的量填写 **[え]** 至 **[か]**。

**问4** 用数值或 $\hbar,m,\alpha$ 中所需的量填写 **[き]** 至 **[さ]**。

**问5** 用适当的数值填写 **[し]**。

参考资料：必要时可以使用以下积分。

$$
\int_{-\pi/2}^{\pi/2}\cos^2x\,dx=\frac\pi2
$$

$$
\int_{-\pi/2}^{\pi/2}x^2\cos^2x\,dx=\frac\pi{24}(\pi^2-6).
$$

## **Kai**

### 問1

運動エネルギーとポテンシャルエネルギーの和より

$$
\boxed{\text{あ}:\ \frac{\hat p^{\,2}}{2m}+V(x)}.
$$

### 問2

井戸内では $-\hbar^2\psi''/(2m)=E\psi$。$k=\sqrt{2mE}/\hbar$ とおくと、$\psi=Ae^{ikx}+Be^{-ikx}$ なので

$$
\boxed{\text{い}:\ i\frac{\sqrt{2mE}}{\hbar}x},\qquad
\boxed{\text{う}:\ -i\frac{\sqrt{2mE}}{\hbar}x}.
$$

二つの空欄を交換してもよい。

### 問3

井戸外では $\psi=0$ なので、連続性より $\boxed{\text{え}:\ 0}$。

二つの境界条件に非自明な解が存在するには

$$
\det\begin{pmatrix}e^{ik\alpha}&e^{-ik\alpha}\\
e^{-ik\alpha}&e^{ik\alpha}\end{pmatrix}
=2i\sin(2k\alpha)=0.
$$

$E=0$ では境界条件を満たす解はゼロ関数のみなので、$2k\alpha=N\pi$、$N=1,2,\ldots$ として

$$
\boxed{\text{お}:\ \frac{N^2\pi^2\hbar^2}{8m\alpha^2}}.
$$

$N=1$ では $\psi(x)=C\cos[\pi x/(2\alpha)]$ であり、

$$
1=|C|^2\int_{-\alpha}^{\alpha}\cos^2\frac{\pi x}{2\alpha}\,dx
=|C|^2\alpha.
$$

全体の位相を選び $C>0$ とすると

$$
\boxed{\text{か}:\ \frac1{\sqrt\alpha}\cos\frac{\pi x}{2\alpha}}
\qquad(-\alpha\le x\le\alpha).
$$

### 問4

$|\psi|^2$ は偶関数なので

$$
\boxed{\text{き}:\ \langle x\rangle=0}.
$$

$u=\pi x/(2\alpha)$ と置換して与えられた積分を用いると

$$
\begin{gathered}
\langle x^2\rangle
=\frac1\alpha\left(\frac{2\alpha}{\pi}\right)^3
\int_{-\pi/2}^{\pi/2}u^2\cos^2u\,du
=\boxed{\frac{\alpha^2(\pi^2-6)}{3\pi^2}}\\
(\text{く}).
\end{gathered}
$$

$\psi$ は実関数で境界でゼロになるため

$$
\begin{gathered}
\langle p\rangle=-i\hbar\int_{-\alpha}^{\alpha}\psi\psi'\,dx
=-\frac{i\hbar}{2}[\psi^2]_{-\alpha}^{\alpha}=0,\\
\boxed{\text{け}:\ 0}.
\end{gathered}
$$

また、$-\hbar^2\psi''=[\pi^2\hbar^2/(4\alpha^2)]\psi$ より

$$
\boxed{\text{こ}:\ \langle p^2\rangle=\frac{\pi^2\hbar^2}{4\alpha^2}}.
$$

したがって

$$
\begin{gathered}
\Delta x\,\Delta p
=\frac{\hbar}{2}\sqrt{\frac{\pi^2-6}{3}},\\
\boxed{\text{さ}:\ \frac12\sqrt{\frac{\pi^2-6}{3}}}.
\end{gathered}
$$

$\pi^2>9$ なので、この積は $\hbar/2$ より大きい。

### 問5

$E=p^2/(2m)$ に運動量の広がり $\Delta p$ を代入したエネルギー尺度として解釈すると

$$
\frac{(\Delta p)^2}{2m}
=\frac{\pi^2\hbar^2}{8m\alpha^2}=E_1
$$

となり、この解釈での空欄は $\boxed{\text{し}:\ 1}$ である。

ただし、これは式 (9) で定義されたエネルギー測定値の標準偏差とは異なる。基底状態は $\hat H\psi=E_1\psi$ を満たすため、式 (9) をエネルギーに適用すれば

$$
\Delta E=\sqrt{\langle\hat H^2\rangle-\langle\hat H\rangle^2}
=\sqrt{E_1^2-E_1^2}=0.
$$

したがって、式 (9) の定義を厳密に採用した場合の比 $\Delta E/E_1$ は $\boxed{0}$ である。

## **Reference**

- [京都大学公式問題：2023年度材料工学専攻、材料基礎学B問題1（PDF 9–11ページ）](https://www.mtl.kyoto-u.ac.jp/exam/master2023.pdf)
- [Miyake：2023年度材料基礎学B問題1](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%9D%90%E6%96%99%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E6%9D%90%E6%96%99%E5%9F%BA%E7%A4%8E%E5%AD%A6B_1.html)
