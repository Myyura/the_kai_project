---
sidebar_label: 2017年3月実施 専門科目 問題6 物理専門
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Simultaneous-Diagonalization-of-Commuting-Operators
  - Physics.Quantum-Mechanics.Quantum-Observable-Expectation-and-Variance
---

# 東北大学 工学研究科 電気・情報系 2017年3月実施 専門科目 問題6 物理専門

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

$\hat A$ および $\hat B$ をある量子系における 2 つの可換な物理量とし、$\hat A$ および $\hat B$ の固有値を各々 $a=\pm1$ および $b=\pm1$ とする。この系の状態は、$\hat A$ と $\hat B$ の共通固有状態、すなわち

$$
|a,b\rangle\quad(a=\pm1,b=\pm1)
$$

を正規直交基底として

$$
|\psi\rangle=\alpha|1,1\rangle+\beta|1,-1\rangle+\gamma|-1,1\rangle+\delta|-1,-1\rangle
$$

と書ける。ここで、$\alpha,\beta,\gamma$ および $\delta$ は、$|\alpha|^2+|\beta|^2+|\gamma|^2+|\delta|^2=1$ を満たす複素数である。以下の問に答えよ。

(1) $|\psi\rangle$ に対する $\hat A$ の期待値 $\langle A\rangle$ および $\hat B$ の期待値 $\langle B\rangle$ を求めよ。

(2) 物理量 $\hat C$ を $\hat C=\hat A+\hat B$ とする。$\hat C$ のすべての固有値およびそれらに対応する規格化された固有状態を求めよ。

(3) 物理量 $\hat X$ を $\hat X=\hat A\hat B$ とする。$\hat X$ のすべての固有値およびそれらに対応する規格化された固有状態を求めよ。

(4) 物理量 $\hat Y$ に対して

$$
\langle a,b|\hat Y|a',b'\rangle=\begin{cases}0&(a=a'\text{ or }b=b')\\1&(a\ne a'\text{ and }b\ne b')\end{cases}
$$

とする。$\hat Y$ のすべての固有値およびそれらに対応する規格化された固有状態を求めよ。

(5) 問 (3) の $\hat X$ と問 (4) の $\hat Y$ が互いに可換であることを示せ。また、$\hat X$ および $\hat Y$ の共通固有状態を、$\hat X$ および $\hat Y$ の固有値のすべての組み合わせについて求めよ。

### 题目描述

可对易的可观测量 $\hat A,\hat B$ 各自的特征值为 $\pm1$，公共正交归一基记为 $|a,b\rangle$。设

$$
|\psi\rangle=\alpha|1,1\rangle+\beta|1,-1\rangle+\gamma|-1,1\rangle+\delta|-1,-1\rangle,
$$

且 $|\alpha|^2+|\beta|^2+|\gamma|^2+|\delta|^2=1$。

1. 求 $\langle A\rangle,\langle B\rangle$。
2. 求 $\hat C=\hat A+\hat B$ 的全部特征值及归一化特征态。
3. 求 $\hat X=\hat A\hat B$ 的全部特征值及归一化特征态。
4. 给定算符 $\hat Y$ 的矩阵元：当 $a=a'$ 或 $b=b'$ 时 $\langle a,b|\hat Y|a',b'\rangle=0$，当 $a\ne a'$ 且 $b\ne b'$ 时为 $1$。求其全部特征值及归一化特征态。
5. 证明 $\hat X,\hat Y$ 对易，并求对应全部特征值组合的公共特征态。

## **Kai**

### (1)

$$
\boxed{\langle A\rangle=|\alpha|^2+|\beta|^2-|\gamma|^2-|\delta|^2},
$$

$$
\boxed{\langle B\rangle=|\alpha|^2-|\beta|^2+|\gamma|^2-|\delta|^2}.
$$

### (2)、(3)

$C|a,b\rangle=(a+b)|a,b\rangle$，$X|a,b\rangle=ab|a,b\rangle$。

| 算符 | 特征值 | 一组正交归一基 |
|---|---:|---|
| $C$ | $2$ | $|1,1\rangle$ |
| $C$ | $0$ | $|1,-1\rangle,|-1,1\rangle$ |
| $C$ | $-2$ | $|-1,-1\rangle$ |
| $X$ | $1$ | $|1,1\rangle,|-1,-1\rangle$ |
| $X$ | $-1$ | $|1,-1\rangle,|-1,1\rangle$ |

每个简并特征空间内，任意系数平方模之和为 $1$ 的线性组合也是归一化特征态。

### (4)、(5)

由定义 $Y|a,b\rangle=|-a,-b\rangle$，故

$$
XY|a,b\rangle=ab|-a,-b\rangle=YX|a,b\rangle,
$$

即 $[X,Y]=0$。全部公共正交归一特征态为

| $X$ 特征值 | $Y$ 特征值 | 公共特征态 |
|---:|---:|---|
| $1$ | $1$ | $(|1,1\rangle+|-1,-1\rangle)/\sqrt2$ |
| $1$ | $-1$ | $(|1,1\rangle-|-1,-1\rangle)/\sqrt2$ |
| $-1$ | $1$ | $(|1,-1\rangle+|-1,1\rangle)/\sqrt2$ |
| $-1$ | $-1$ | $(|1,-1\rangle-|-1,1\rangle)/\sqrt2$ |

因此 $Y$ 的特征值为 $\pm1$，各有二重简并；表中相同 $Y$ 特征值对应态的任意归一化线性组合构成其全部特征态。
