---
sidebar_label: 2015年8月実施 専門科目 問題6 物理専門1
tags:
  - Tohoku-University
  - Physics.Quantum-Mechanics.Pauli-Matrix-Exponential-and-Unitary-Evolution
  - Physics.Quantum-Mechanics.Quantum-Observable-Expectation-and-Variance
---

# 東北大学 工学研究科 電気・情報系 2015年8月実施 専門科目 問題6 物理専門1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

ある系についての物理量（エルミート演算子）$\hat Z,\hat X$ および $\hat Y$ を考える。$\hat Z$ の固有値を $a$ および $-a$（$a>0$），各々に対応する固有状態を $|+z\rangle$ および $|-z\rangle$ とする。ここで，$|+z\rangle$ および $|-z\rangle$ は規格化（正規化）されており，縮退はないものとする。このとき，この系の状態は一般に
$$
|\psi\rangle=\alpha|+z\rangle+\beta|-z\rangle
$$
と書ける。ただし，$\alpha$ および $\beta$ は $|\alpha|^2+|\beta|^2=1$ を満たす複素数である。以下の問に答えよ。

(1) $|\psi\rangle$ に対する $\hat Z$ の期待値 $\langle Z\rangle$ を求めよ。

(2) $|\psi\rangle$ に対する $\hat Z$ の不確定性
$$
\Delta Z=\sqrt{\langle Z^2\rangle-\langle Z\rangle^2}
$$
を求め，$\langle Z\rangle$ の関数として図示せよ。ただし，$\langle Z^2\rangle$ は $|\psi\rangle$ に対する $\hat Z^2$ の期待値である。

(3) $\hat X$ の固有値も $a$ と $-a$ であり，各々に対応する規格化された固有状態を
$$
|+x\rangle=\frac1{\sqrt2}(|+z\rangle+|-z\rangle),\qquad
|-x\rangle=\frac1{\sqrt2}(|+z\rangle-|-z\rangle)
$$
とする。このとき，
$$
\hat X|+z\rangle=a|-z\rangle,\qquad\hat X|-z\rangle=a|+z\rangle
$$
を示せ。また，$|\psi\rangle$ に対する $\hat X$ の期待値 $\langle X\rangle$ を求めよ。

(4) $\hat Y$ が
$$
\hat Y=-\frac i{2a}[\hat Z,\hat X]
$$
で与えられるものとする。ここで，$[\hat Z,\hat X]\equiv\hat Z\hat X-\hat X\hat Z$，$i$ は虚数単位である。$\hat Y$ のすべての固有値およびそれらに対応する規格化された固有状態を求めよ。

(5) この系のハミルトニアンを
$$
\hat H=\hbar\omega\hat Z
$$
とする。ここで，$\hbar=h/(2\pi)$，$h$ はプランク定数，$\omega$ は正の定数である。時刻 $t=0$ における系の状態が問 (3) の $|+x\rangle$ であったとき，$t\ge0$ における $\hat X$ の期待値を求めよ。

### 题目描述

厄米算符 $\hat Z$ 的特征值为 $\pm a$（$a>0$），相应归一化非简并特征态为 $|\pm z\rangle$。一般态为

$$
|\psi\rangle=\alpha|+z\rangle+\beta|-z\rangle,\qquad|\alpha|^2+|\beta|^2=1.
$$

1. 求 $\langle Z\rangle$。
2. 求 $\Delta Z=\sqrt{\langle Z^2\rangle-\langle Z\rangle^2}$，画出其关于 $\langle Z\rangle$ 的图像。
3. $\hat X$ 的特征值也为 $\pm a$，特征态为 $|\pm x\rangle=(|+z\rangle\pm|-z\rangle)/\sqrt2$。证明 $\hat X|\pm z\rangle=a|\mp z\rangle$，并求 $\langle X\rangle$。
4. 令 $\hat Y=-i[\hat Z,\hat X]/(2a)$，求其全部特征值和归一化特征态。
5. 哈密顿量为 $\hat H=\hbar\omega\hat Z$，$\omega>0$。初态为 $|+x\rangle$，求任意 $t\ge0$ 时 $\langle X\rangle$。

## **Kai**

### (1)–(2)

在 $\{|+z\rangle,|-z\rangle\}$ 基底下 $Z=a\sigma_z$，故

$$
\boxed{\langle Z\rangle=a(|\alpha|^2-|\beta|^2),\qquad
\Delta Z=\sqrt{a^2-\langle Z\rangle^2}=2a|\alpha\beta|.}
$$

图像为半径 $a$ 的上半圆，定义域为 $-a\le\langle Z\rangle\le a$。

![不确定度随均值的变化](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201508_senmon_6_uncertainty.svg)

### (3)

由谱分解

$$
X=a|+x\rangle\langle+x|-a|-x\rangle\langle-x|=a\begin{pmatrix}0&1\\1&0\end{pmatrix},
$$

立即有 $X|\pm z\rangle=a|\mp z\rangle$，且

$$
\boxed{\langle X\rangle=a(\alpha^*\beta+\beta^*\alpha)=2a\Re(\alpha^*\beta).}
$$

### (4)

$$
Y=-\frac{i}{2a}[a\sigma_z,a\sigma_x]=a\sigma_y.
$$

因此

$$
\boxed{\lambda=\pm a,\qquad|\pm y\rangle=\frac{|+z\rangle\pm i|-z\rangle}{\sqrt2}.}
$$

### (5)

$$
|\psi(t)\rangle=\frac{e^{-ia\omega t}|+z\rangle+e^{ia\omega t}|-z\rangle}{\sqrt2}.
$$

代入 (3)：

$$
\boxed{\langle X\rangle_t=a\cos(2a\omega t).}
$$
