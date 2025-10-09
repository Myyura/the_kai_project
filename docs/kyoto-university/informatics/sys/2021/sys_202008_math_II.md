---
sidebar_label: "2020年8月実施 数学【II】"
tags:
  - Kyoto-University
  - Calculus
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

(iii) 任意の $t \in G$ に対して、$g(t) = g(t/2)$ が成り立つことを示せ。

(iv) 次式が成り立つことを示せ。

$$
g\left(1 + \frac{n\pi}{2^k}\right) = g(1), \quad n, k \in \mathbb{Z}
$$

(v) 関数 $f$ を求めよ。なお、導出過程も示せ。

### 問2
微分可能な関数 $f : (a,b) \to (0,\infty)$ と
$g : (a,b) \to \mathbb{R}$ が以下のいずれかを満たすと仮定する。
ただし、$a < b$ とする。

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
- (b) $\lim_{x \to +0} \left(\frac{2}{\pi} \arctan \frac{1}{x} \right)^{1/x}$（$-\frac{\pi}{2} < \arctan y < \frac{\pi}{2}, \ \forall y \in \mathbb{R}$ とする）

(ii) 関数 $h : \mathbb{R} \to \mathbb{R}$ は $2$ 回微分可能であり、
正の実数 $p$ に対して次式を満たすと仮定する。

$$
h''(x) + h(x) = 0, \quad \lim_{x \to +0} (h(x))^{1/x} = p, \quad \lim_{x \to +0} h(x) > 0
$$

関数 $h$ を求めよ。

(iii) (A), (B), (C) のいずれかが満たされるとき、式 (1) が成り立つことを証明せよ。


## **Kai**
### 問1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_math_II_p1_s.jpg" width="700" alt=""/>
</figure>

### 問2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_math_II_p2_s.jpg" width="700" alt=""/>
</figure>