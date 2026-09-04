---
sidebar_label: 2016年8月実施 専門科目II 問題1
tags:
  - Tokyo-University
  - Mathematics.Numerical-Analysis.Roundoff-vs-Truncation-Error
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2016年8月実施 専門科目II 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
回答下列问题。

（1）用 $\cos\alpha,\sin\alpha,\cos\beta,\sin\beta$ 表示 $\cos(\alpha+\beta)$ 和 $\sin(\alpha+\beta)$。

（2）设 $0\le\alpha<\pi/2$，用 $\cos\alpha,\sin\alpha$ 表示 $\cos(\alpha/2)$ 和 $\sin(\alpha/2)$。

（3）有限精度下，直接使用第（2）问公式在 $\alpha$ 接近 $0$ 时是否会丢失有效数字？若会，改写公式以避免该问题。

（4）设

$$
\alpha=\frac\pi2\sum_{i=1}^{N}b_i2^{-i},\qquad b_i\in\{0,1\},
$$

并定义 $\alpha_n=\frac\pi2\sum_{i=1}^{n}b_i2^{-i}$。

1. 用 $\cos\alpha_n,\sin\alpha_n$ 表示 $\cos\alpha_{n+1},\sin\alpha_{n+1}$；
2. 设计只使用四则运算和开平方计算 $\cos\alpha,\sin\alpha$ 的算法。

（5）定义 $\cosh a=(e^a+e^{-a})/2$、$\sinh a=(e^a-e^{-a})/2$。设 $0\le x<1$ 有有限位二进制表示，设计只使用四则运算和开平方计算 $\cosh(x\log_e2)$、$\sinh(x\log_e2)$ 的算法。

## **Kai**
### (1)
$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta,
$$

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta.
$$

### (2)
因 $0\le\alpha/2<\pi/4$，两根均取正号：

$$
\cos\frac\alpha2=\sqrt{\frac{1+\cos\alpha}{2}},\qquad
\sin\frac\alpha2=\sqrt{\frac{1-\cos\alpha}{2}}.
$$

### (3)
$\alpha\approx0$ 时 $\cos\alpha\approx1$，计算 $1-\cos\alpha$ 会发生相近数相减，导致 $\sin(\alpha/2)$ 丢失有效数字。利用

$$
1-\cos\alpha=\frac{\sin^2\alpha}{1+\cos\alpha}
$$

改写为

$$
\sin\frac\alpha2=\frac{\sin\alpha}{\sqrt{2(1+\cos\alpha)}}.
$$

$\cos(\alpha/2)$ 的原公式没有该消减问题。

### (4)
令

$$
\theta_{n+1}=\frac{\pi}{2^{n+2}},\qquad
\alpha_{n+1}=\alpha_n+b_{n+1}\theta_{n+1}.
$$

记 $C_n=\cos\alpha_n,S_n=\sin\alpha_n,c=\cos\theta_{n+1},s=\sin\theta_{n+1}$，则

$$
(C_{n+1},S_{n+1})=
\begin{cases}
(C_n,S_n),&b_{n+1}=0,\\
(C_nc-S_ns,\ S_nc+C_ns),&b_{n+1}=1.
\end{cases}
$$

算法从 $(C_0,S_0)=(1,0)$ 开始。先置

$$
c_1=s_1=\frac1{\sqrt2}
$$

（对应 $\theta_1=\pi/4$），并递推

$$
c_{i+1}=\sqrt{\frac{1+c_i}{2}},\qquad
s_{i+1}=\frac{s_i}{\sqrt{2(1+c_i)}}.
$$

按 $i=1,\ldots,N$ 依次用上面的加法公式：若 $b_i=1$，就把 $(C,S)$ 更新为
$(Cc_i-Ss_i,Sc_i+Cs_i)$；若 $b_i=0$ 则不变。最终 $(C,S)=(\cos\alpha,\sin\alpha)$。全过程只含四则运算与开平方。

### (5)
写成 $x=\sum_{i=1}^{N}b_i2^{-i}$。从 $r_0=2$ 开始反复开平方，得到

$$
r_i=\sqrt{r_{i-1}}=2^{2^{-i}}.
$$

令 $q=1$，对每个 $b_i=1$ 乘上 $r_i$，则

$$
q=\prod_{i=1}^{N}r_i^{b_i}=2^x=e^{x\log_e2}.
$$

因此

$$
\cosh(x\log_e2)=\frac{q+q^{-1}}2,\qquad
\sinh(x\log_e2)=\frac{q-q^{-1}}2.
$$
