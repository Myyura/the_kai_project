---
sidebar_label: 2020年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Real-Analysis.Functional-Equation
  - Mathematics.Calculus.Limit
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---
# 京都大学 情報学研究科 システム科学専攻 2020年8月実施 数学【II】

## **Author**
[AKIRA](https://www.xiaohongshu.com/explore/68785ee8000000000d019ff4?xsec_token=ABrcrf5X-L0bZHNo5eUjCdTXGcWyhwY_E6H3CLfh1Lapc=)

## **Description**
### 問1
関数 $f : [-1, 1] \to \mathbb{R}$ は連続関数であり、次式を満たすものとする。

$$
f(2x^2 - 1) = 2x f(x)
$$

さらに、

$$
\mathbb{G} = \{ t \in \mathbb{R} : t \ne n\pi, \ n \in \mathbb{Z} \}
$$

とし、関数 $g : \mathbb{G} \to \mathbb{R}$ を次のように定める。

$$
g(t) = \frac{f(\cos t)}{\sin t}
$$

このとき、以下の設問に答えよ。

(i) $f(-1)$ および $f(1)$ の値を求めよ。

(ii) $g$ が奇関数であることを示せ。

(iii) 任意の $t \in G$ に対して、 $g(t) = g(t/2)$ が成り立つことを示せ。

(iv) 次式が成り立つことを示せ。

$$
g\left(1 + \frac{n\pi}{2^k}\right) = g(1), \quad n, k \in \mathbb{Z}
$$

(v) 関数 $f$ を求めよ。なお、導出過程も示せ。

### 問2
微分可能な関数 $f : (a,b) \to (0,\infty)$ と
$g : (a,b) \to \mathbb{R}$ が以下のいずれかを満たすと仮定する。
ただし、 $a < b$ とする。

- (A) $\lim_{x \to a+0} f(x) = 1$ かつ $\lim_{x \to a+0} g(x) = \pm \infty$
- (B) $\lim_{x \to a+0} f(x) = \infty$ かつ $\lim_{x \to a+0} g(x) = 0$
- (C) $\lim_{x \to a+0} f(x) = 0$ かつ $\lim_{x \to a+0} g(x) = 0$

このとき、次式が成り立つ。

$$
\lim_{x \to a+0} (f(x))^{g(x)} = \exp \left(-\lim_{x \to a+0} \frac{f'(x)(g(x))^2}{f(x) g'(x)} \right)
\tag{1}
$$

(i) 次の値を求めよ。

- (a) $\lim_{x \to +0} (\sin x)^{\sqrt{x}}$
- (b) $\lim_{x \to +0} \left(\frac{2}{\pi} \arctan \frac{1}{x} \right)^{1/x}$ （ $-\frac{\pi}{2} < \arctan y < \frac{\pi}{2}, \ \forall y \in \mathbb{R}$ とする）

(ii) 関数 $h : \mathbb{R} \to \mathbb{R}$ は $2$ 回微分可能であり、
正の実数 $p$ に対して次式を満たすと仮定する。

$$
h''(x) + h(x) = 0, \quad \lim_{x \to +0} (h(x))^{1/x} = p, \quad \lim_{x \to +0} h(x) > 0
$$

関数 $h$ を求めよ。

(iii) (A), (B), (C) のいずれかが満たされるとき、式 (1) が成り立つことを証明せよ。

### 题目描述

回答以下两题。

1. 连续函数 $f:[-1,1]\to\mathbb{R}$ 满足

$$
f(2x^2-1)=2xf(x).
$$

定义

$$
\mathbb{G}
=\{t\in\mathbb{R}\mid
t\ne n\pi,\ n\in\mathbb{Z}\},
$$

以及 $g:\mathbb{G}\to\mathbb{R}$：

$$
g(t)=\frac{f(\cos t)}{\sin t}.
$$

完成下列各问：

   1. 求 $f(-1)$ 和 $f(1)$。
   2. 证明 $g$ 是奇函数。
   3. 证明对任意 $t\in\mathbb{G}$ 都有
      $g(t)=g(t/2)$。
   4. 证明对任意整数 $n,k$，

$$
g\!\left(1+\frac{n\pi}{2^k}\right)=g(1).
$$

   5. 求出函数 $f$，并写明推导过程。

2. 设 $a<b$，可微函数
   $f:(a,b)\to(0,\infty)$ 和
   $g:(a,b)\to\mathbb{R}$ 满足以下三种条件之一：

   - （A）
     $\displaystyle\lim_{x\to a+0}f(x)=1$，且
     $\displaystyle\lim_{x\to a+0}g(x)=\pm\infty$；
   - （B）
     $\displaystyle\lim_{x\to a+0}f(x)=\infty$，且
     $\displaystyle\lim_{x\to a+0}g(x)=0$；
   - （C）
     $\displaystyle\lim_{x\to a+0}f(x)=0$，且
     $\displaystyle\lim_{x\to a+0}g(x)=0$。

题面给出在上述任一情形下成立的公式

$$
\lim_{x\to a+0}(f(x))^{g(x)}
=
\exp\!\left(
-\lim_{x\to a+0}
\frac{f'(x)(g(x))^2}{f(x)g'(x)}
\right).
\tag{1}
$$

完成：

   1. 求

$$
\lim_{x\to+0}(\sin x)^{\sqrt{x}}
$$

和

$$
\lim_{x\to+0}
\left(\frac{2}{\pi}\arctan\frac1x\right)^{1/x},
$$

其中反正切取值满足
$-\frac{\pi}{2}<\arctan y<\frac{\pi}{2}$（$y\in\mathbb{R}$）。
   2. 设 $h:\mathbb{R}\to\mathbb{R}$ 二阶可微，并对某个正实数 $p$ 满足

$$
h''(x)+h(x)=0,\qquad
\lim_{x\to+0}(h(x))^{1/x}=p,\qquad
\lim_{x\to+0}h(x)>0.
$$

求函数 $h$。
   3. 证明只要条件（A）、（B）、（C）中任一项成立，公式 (1) 就成立。

## **Kai**
### 問1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_math_II_p1_s.jpg" width="700" alt=""/>
</figure>

### 問2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_math_II_p2_s.jpg" width="700" alt=""/>
</figure>
