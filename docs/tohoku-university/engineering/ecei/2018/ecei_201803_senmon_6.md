---
sidebar_label: 2018年3月実施 専門科目 問題6 物理専門
tags:
  - Tohoku-University
  - Physics.Quantum-Mechanics.Creation-and-Annihilation-Operators
  - Physics.Quantum-Mechanics.First-Order-Perturbation-of-Displaced-Oscillator
---

# 東北大学 工学研究科 電気・情報系 2018年3月実施 専門科目 問題6 物理専門

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

ハミルトニアンが次式で与えられる、一様な静電場 $F$ の中にある電荷 $e$ を持った $1$ 次元調和振動子を考える。

$$
\hat H=\hat H_0-eF\hat x.\tag{6A}
$$

ただし、

$$
\hat H_0=\frac{\hat p^2}{2m}+\frac12m\omega^2\hat x^2\tag{6B}
$$

である。$m$ と $\omega$ はそれぞれ粒子の質量、角振動数である。$\hat x$ と $\hat p$ はそれぞれ位置演算子、運動量演算子であり、次の関係式を満たす。

$$
\hat x\hat p-\hat p\hat x=i\hbar.\tag{6C}
$$

ここで、$i$ と $\hbar$ はそれぞれ虚数単位とプランク定数を $2\pi$ で割った数である。さらに、消滅演算子 $\hat a$ と生成演算子 $\hat a^\dagger$ は次のように定義される。

$$
\hat a=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat x+i\frac{\hat p}{m\omega}\right),\tag{6D}
$$

$$
\hat a^\dagger=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat x-i\frac{\hat p}{m\omega}\right).\tag{6E}
$$

ここで、次の関係式が成立する。

$$
\hat a|n\rangle=\sqrt n|n-1\rangle,\tag{6F}
$$

$$
\hat a^\dagger|n\rangle=\sqrt{n+1}|n+1\rangle.\tag{6G}
$$

ただし、$|n\rangle$（$n=0,1,2,\ldots$）はハミルトニアン $\hat H_0$ の規格化された固有ベクトルとする。以下の問に答えよ。

(1) $\hat H_0$ を $\omega,\hbar,\hat a,\hat a^\dagger$ を用いて表せ。

(2) $|n\rangle$ に対する $\hat H_0$ の固有値 $E_0$ を $\omega,\hbar,n$ を用いて表せ。

(3) 次の関係式が成り立つことを示せ。

$$
\langle n|\hat x|n'\rangle=\sqrt{\frac{\hbar}{2m\omega}}\left(\sqrt{n'}\delta_{n,n'-1}+\sqrt n\delta_{n',n-1}\right).\tag{6H}
$$

ただし、$n,n',\delta_{n,n'}$ はそれぞれ非負の整数、クロネッカーのデルタである。

(4) $-eF\hat x$ を摂動ハミルトニアンとして、$|n\rangle$ に対する $1$ 次の摂動エネルギー $E_1$ を求めよ。

(5) $-eF\hat x$ を摂動ハミルトニアンとして、$|n\rangle$ に対する $2$ 次の摂動エネルギー $E_2$ を求めよ。

### 题目描述

一维带电谐振子处于均匀静电场 $F$ 中，Hamiltonian 为

$$
\hat H=\hat H_0-eF\hat x,\qquad
\hat H_0=\frac{\hat p^2}{2m}+\frac12m\omega^2\hat x^2,\qquad[\hat x,\hat p]=i\hbar.
$$

定义

$$
\hat a=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat x+\frac{i\hat p}{m\omega}\right),\quad
\hat a^\dagger=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat x-\frac{i\hat p}{m\omega}\right),
$$

并给定归一化态 $|n\rangle$ 满足 $a|n\rangle=\sqrt n|n-1\rangle$、$a^\dagger|n\rangle=\sqrt{n+1}|n+1\rangle$。

1. 用 $\omega,\hbar,a,a^\dagger$ 表示 $H_0$。
2. 求 $|n\rangle$ 对应的未扰动能量 $E_0$。
3. 证明
   

$$
\langle n|\hat x|n'\rangle=\sqrt{\frac\hbar{2m\omega}}\left(\sqrt{n'}\delta_{n,n'-1}+\sqrt n\delta_{n',n-1}\right).
$$

4. 将 $-eF\hat x$ 作为微扰，求一阶能量修正 $E_1$。
5. 求二阶能量修正 $E_2$。

## **Kai**

### (1)、(2)

由对易关系直接展开，

$$
a^\dagger a=\frac{H_0}{\hbar\omega}-\frac12,
$$

所以

$$
\boxed{H_0=\hbar\omega\left(a^\dagger a+\frac12\right)},\qquad
\boxed{E_0=\hbar\omega\left(n+\frac12\right)}.
$$

### (3)

$$
x=\sqrt{\frac\hbar{2m\omega}}(a+a^\dagger).
$$

将升降算符作用于 $|n'\rangle$，再与 $\langle n|$ 取内积，得到

$$
\langle n|x|n'\rangle=\sqrt{\frac\hbar{2m\omega}}
\left(\sqrt{n'}\delta_{n,n'-1}+\sqrt{n'+1}\delta_{n,n'+1}\right).
$$

第二项在非零时 $n=n'+1$，所以等于题示形式。

### (4)、(5)

对角矩阵元 $\langle n|x|n\rangle=0$，故 $\boxed{E_1=0}$。

二阶仅有 $k=n\pm1$ 贡献：

$$
\begin{aligned}
E_2&=e^2F^2\sum_{k\ne n}\frac{|\langle k|x|n\rangle|^2}{E_n^{(0)}-E_k^{(0)}}\\
&=\frac{e^2F^2\hbar}{2m\omega}\left(\frac n{\hbar\omega}-\frac{n+1}{\hbar\omega}\right)
=\boxed{-\frac{e^2F^2}{2m\omega^2}}.
\end{aligned}
$$

$n=0$ 时第一项为零，公式仍成立。
