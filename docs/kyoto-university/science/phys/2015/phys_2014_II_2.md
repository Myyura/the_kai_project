---
sidebar_label: "2015年度 II-2（量子力学）"
tags:
  - Kyoto-University
  - Physics.Quantum-Mechanics.Creation-and-Annihilation-Operators
  - Physics.Quantum-Mechanics.Time-Evolution-of-Two-Level-System
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2015年度 II-2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

自然単位系 $\hbar=c=1$ を用いる。$i,j=1,2$ に対し $[\hat a_i,\hat a_j^\dagger]=\delta_{ij}$、$[\hat a_i,\hat a_j]=0$、$\hat a_i|0\rangle=0$ とする。実数 $\omega_A,\omega_B,\omega_C$ を用いたハミルトニアン

$$
\hat H=\omega_A\hat a_1^\dagger\hat a_1
+\omega_B(\hat a_1^\dagger\hat a_2+\hat a_2^\dagger\hat a_1)
+\omega_C\hat a_2^\dagger\hat a_2
$$

を考える。

1. $\hat b_1=\hat a_1\cos\theta+\hat a_2\sin\theta$、$\hat b_2=-\hat a_1\sin\theta+\hat a_2\cos\theta$ として $\hat H=\omega_1\hat b_1^\dagger\hat b_1+\omega_2\hat b_2^\dagger\hat b_2$、$\omega_1\le\omega_2$ と書く。$\omega_1,\omega_2,\tan2\theta$ を求めよ。
2. 初期状態 $|\alpha\rangle=\hat a_1^\dagger|0\rangle$ が時刻 $t$ に $|\beta\rangle=\hat a_2^\dagger|0\rangle$ として観測される確率 $P(t)=|\langle\beta|\psi(t)\rangle|^2$ を求めよ。
3. $t>\Delta T>0$ とし、観測確率を $\overline P(t)=\Delta T^{-1}\int_{t-\Delta T/2}^{t+\Delta T/2}P(t')dt'$ とする。その式を求めよ。
4. $\omega_2>\omega_1$ のとき $\overline P(t)$ の $\Delta T$ 依存性を図示し、$\Delta T=0$ と $\Delta T\gg1/(\omega_2-\omega_1)$ の値を明記せよ。

#### 题目描述

采用 $\hbar=c=1$。两组玻色产生湮灭算符满足 $[a_i,a_j^\dagger]=\delta_{ij}$、$[a_i,a_j]=0$，真空满足 $a_i|0\rangle=0$。哈密顿量为

$$
H=\omega_Aa_1^\dagger a_1+\omega_B(a_1^\dagger a_2+a_2^\dagger a_1)+\omega_Ca_2^\dagger a_2,
$$

三个系数均为实数。

1. 用 $b_1=a_1\cos\theta+a_2\sin\theta$、$b_2=-a_1\sin\theta+a_2\cos\theta$ 将 $H$ 写成 $\omega_1b_1^\dagger b_1+\omega_2b_2^\dagger b_2$，$\omega_1\le\omega_2$；求两频率及 $\tan2\theta$。
2. 初态 $|\alpha\rangle=a_1^\dagger|0\rangle$ 在 $t$ 时刻被观测为 $|\beta\rangle=a_2^\dagger|0\rangle$ 的概率是多少？
3. 对时间窗 $[t-\Delta T/2,t+\Delta T/2]$ 平均，$t>\Delta T>0$，求平均概率。
4. 当 $\omega_2>\omega_1$ 时画出平均概率随 $\Delta T$ 的变化，标注零时间窗及远大于振荡时间尺度时的极限。

## **Kai**

### (1)
$D=\sqrt{(\omega_A-\omega_C)^2+4\omega_B^2}$ とおく。特性方程式より

$$
\boxed{\omega_{1,2}=\frac{\omega_A+\omega_C\mp D}{2}}.
$$

変換後の非対角項は $\omega_B\cos2\theta+(\omega_C-\omega_A)\sin2\theta/2$ なので

$$
\boxed{\tan2\theta=\frac{2\omega_B}{\omega_A-\omega_C}}.
$$

固有値の順序を指定するには、$D>0$ に対して

$$
\cos2\theta=\frac{\omega_C-\omega_A}{D},\qquad
\sin2\theta=-\frac{2\omega_B}{D}
$$

を選べばよい。$D=0$ では角度は任意である。
### (2)
逆変換 $a_1^\dagger=b_1^\dagger\cos\theta-b_2^\dagger\sin\theta$ により

$$
|\psi(t)\rangle=(e^{-i\omega_1t}\cos\theta\,b_1^\dagger
-e^{-i\omega_2t}\sin\theta\,b_2^\dagger)|0\rangle.
$$

したがって

$$
\langle\beta|\psi(t)\rangle=\sin\theta\cos\theta(e^{-i\omega_1t}-e^{-i\omega_2t}),
\qquad
\boxed{P(t)=\sin^22\theta\,\sin^2\frac{Dt}{2}}.
$$

### (3)
$A=\frac12\sin^22\theta$ と書くと $P(t)=A(1-\cos Dt)$。積分して

$$
\boxed{\overline P(t)=A\left[1-\cos(Dt)\frac{\sin(D\Delta T/2)}{D\Delta T/2}\right]}.
$$

$D=0$ では遷移確率はゼロ。
### (4)
$s=D\Delta T/2$ に対する曲線は $A[1-\cos(Dt)\operatorname{sinc}s]$ である。

$$
\boxed{\overline P|_{\Delta T=0}=P(t),\qquad
\overline P\longrightarrow A=\frac12\sin^22\theta}.
$$

$s=n\pi$（$n=1,2,\ldots$）で高さ $A$ を通り、$A$ の上下で振幅が $1/\Delta T$ に比例して減衰する。$\cos Dt>0$ なら $A$ より下から出発し、負なら上下を反転した形、ゼロなら水平線となる。次の図に代表的な三つの場合を示す。

![時間平均遷移確率](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/2015-II-2-time-average.svg)

$t>\Delta T$ の制限内で大きい時間窓を考えるには $Dt\gg1$ が必要である。

## **Reference**

- [京都大学公式問題（2015年度、PDF 11–12ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H27.pdf)
