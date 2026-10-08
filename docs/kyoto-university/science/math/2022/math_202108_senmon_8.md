---
sidebar_label: "2022年度 専門科目 [8]"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Elliptic-Energy-Estimates
  - Mathematics.Vector-Calculus.Greens-Identities
---

# 京都大学 理学研究科 数学・数理解析専攻 2022年度 専門科目 問題8

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$n$ を $2$ 以上の整数、$\Omega=\{x\in\mathbb R^n\mid |x|<1\}$ とし、$\overline\Omega$ をその閉包とする。$C^2(\overline\Omega)$ を、$\Omega$ 上 $C^2$ 級かつ2階までの各偏導関数が $\overline\Omega$ 上の連続関数に拡張できる実数値関数全体の集合とする。$f\in C^2(\overline\Omega)$ とする。各 $\varepsilon>0$ に対し、$u_\varepsilon\in C^2(\overline\Omega)$ を方程式

$$
\begin{cases}-\varepsilon\Delta u_\varepsilon+u_\varepsilon=f,&x\in\Omega,\\
u_\varepsilon=0,&x\in\partial\Omega
\end{cases}
$$

の解とする。ただし $\Delta=\sum_{i=1}^n\partial^2/\partial x_i^2$ である。以下の問に答えよ。

(i) $\varepsilon$ に依存しないある $C_1,C_2>0$ が存在して

$$
\sqrt\varepsilon\|\nabla u_\varepsilon\|_{L^2(\Omega)}\le C_1\|f\|_{L^2(\Omega)},\qquad
\varepsilon\|\Delta u_\varepsilon\|_{L^2(\Omega)}\le C_2\|f\|_{L^2(\Omega)}
$$

が成り立つことを示せ。

(ii) $\lim_{\varepsilon\downarrow0}\|u_\varepsilon-f\|_{L^2(\Omega)}=0$ を示せ。

#### 题目描述

设 $n\ge2$，$\Omega=\{x\in\mathbb R^n\mid |x|<1\}$，$\overline\Omega$ 为其闭包。$C^2(\overline\Omega)$ 表示在 $\Omega$ 内二阶连续可微、且二阶及以下偏导数均可连续延拓到闭包的实值函数。给定 $f\in C^2(\overline\Omega)$，对每个 $\varepsilon>0$，设 $u_\varepsilon\in C^2(\overline\Omega)$ 满足

$$
-\varepsilon\Delta u_\varepsilon+u_\varepsilon=f\quad\text{于 }\Omega,
\qquad u_\varepsilon=0\quad\text{于 }\partial\Omega,
\qquad \Delta=\sum_{i=1}^n\frac{\partial^2}{\partial x_i^2}.
$$

(i) 证明存在与 $\varepsilon$ 无关的正常数 $C_1,C_2$，使

$$
\sqrt\varepsilon\|\nabla u_\varepsilon\|_{L^2}\le C_1\|f\|_{L^2},\qquad
\varepsilon\|\Delta u_\varepsilon\|_{L^2}\le C_2\|f\|_{L^2}.
$$

(ii) 证明 $\|u_\varepsilon-f\|_{L^2(\Omega)}\to0$（$\varepsilon\downarrow0$）。

## **Kai**

以下、すべてのノルムと内積は $L^2(\Omega)$ のものとする。

### (i)

方程式に $u_\varepsilon$ を掛けて積分し、境界条件を用いて部分積分すると

$$
\varepsilon\|\nabla u_\varepsilon\|_2^2+\|u_\varepsilon\|_2^2
=(f,u_\varepsilon)\le\|f\|_2\|u_\varepsilon\|_2.
$$

従って $\|u_\varepsilon\|_2\le\|f\|_2$ であり、平方完成により

$$
\varepsilon\|\nabla u_\varepsilon\|_2^2
\le\|f\|_2\|u_\varepsilon\|_2-\|u_\varepsilon\|_2^2
\le\frac14\|f\|_2^2.
$$

また、方程式に $-\varepsilon\Delta u_\varepsilon$ を掛けて積分すると

$$
\varepsilon^2\|\Delta u_\varepsilon\|_2^2
+\varepsilon\|\nabla u_\varepsilon\|_2^2
=-\varepsilon(f,\Delta u_\varepsilon)
\le\varepsilon\|f\|_2\|\Delta u_\varepsilon\|_2.
$$

よって $\varepsilon\|\Delta u_\varepsilon\|_2\le\|f\|_2$。従って $\boxed{C_1=1/2,\ C_2=1}$ と取れる。

### (ii)

任意の $\delta>0$ に対し、$C_c^\infty(\Omega)$ の $L^2(\Omega)$ における稠密性から、$\|f-g\|_2<\delta$ となる $g\in C_c^\infty(\Omega)$ を選ぶ。

$v_\varepsilon=u_\varepsilon-g$ は境界で $0$ であり、

$$
-\varepsilon\Delta v_\varepsilon+v_\varepsilon=f-g+\varepsilon\Delta g.
$$

(i) と同じエネルギー評価から

$$
\|v_\varepsilon\|_2\le\|f-g+\varepsilon\Delta g\|_2
\le\delta+\varepsilon\|\Delta g\|_2.
$$

従って $\|u_\varepsilon-f\|_2\le2\delta+\varepsilon\|\Delta g\|_2$。$\varepsilon\downarrow0$ とした後 $\delta\downarrow0$ とすれば結論を得る。

## **Reference**

- [京都大学公式問題（2022年度・専門科目、PDF 6ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2021math_senmon_for2022_honshi.pdf)
- [照合用参考解答（2022年度・専門科目 問題8、PDF 4ページ）](https://drive.google.com/file/d/13VP_uw-pTcypra8PZmwMvf1-TFGKwnMp/view)
