---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2020年8月実施 専門科目 S-3
tags:
  - Kyoto-University
  - Machine-Learning
---
# 京都大学 情報学研究科 知能情報学専攻 2020年8月実施 専門科目 S-3

## **Author**
祭音Myyura

## **Description**
予測問題を考える。
入力 $x_i \in \mathbb{R}$、それに対応する出力を $y_i \in \mathbb{R}$ とし、学習データセット $\mathcal{D} = \{(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)\}$ が与えられている。
なお、学習データセットは同時確率密度関数 $p(x,y)$ の分布から独立に生成されているとする。

ここで線形モデル

$$
f(x;a,b) = ax + b
$$

を用いる。なお $a \in \mathbb{R}$ および $b \in \mathbb{R}$ は回帰係数である。

**設問1** 以下の目的関数 $\hat{J}(a,b)$ を最小化する $\hat{a}$ および $\hat{b}$ を学習データセット $\mathcal{D}$ を用いて導け。

$$
\hat{J}(a,b) = \frac{1}{n} \sum_{i=1}^n (y_i - f(x_i;a,b))^2
$$

**設問2** 学習データセットが $\mathcal{D}' = \{(1,2), (3,3), (2,1), (4,5), (5,4)\}$ で与えられている。この学習データセット $\mathcal{D}'$ から推定した回帰係数 $\hat{a}$ および $\hat{b}$ をそれぞれ計算せよ。

**設問3** 以下の目的関数を考える。

$$
J'(a,b) = \iint(y-f(x;a,b))^2 p'(x,y) \text{d}x\text{d}y
$$

なお、同時確率密度関数 $p'(x,y)$ は $p'(x,y) \neq p(x,y)$ である。
今、$p(x)$ を $p(x,y)$ の周辺確率密度関数とし、$p'(x)$ を $p'(x,y)$ の周辺確率密度関数とし、条件付き確率が $p(y|x)=p'(y|x)$ を満たすとする。
$\boxed{\quad}$ を $p(x)$ および $p'(x)$ を用いて答えよ。
導出過程も示せ。

$$
J'(a,b) = \iint (y-f(x;a,b))^2\ \boxed{\quad}\ p(x,y) \text{d}x\text{d}y
$$

**設問4** 以下の目的関数

$$
J(a,b) = \iint (y-f(x;a,b))^2 p(x,y) \text{d}x\text{d}y
$$

の学習データセット $\mathcal{D}$ による近似は**設問1**の $\hat{J}(a,b)$ で与えられる。同様に、**設問3**の $J'(a,b)$ 近似 $\hat{J}'(a,b)$ を学習データセット $\mathcal{D}$ および $p(x)$、$p'(x)$ を用いて導け。

**設問5** **設問4**の $\hat{J}'(a,b)$ を最小化する $\hat{a}$ および $\hat{b}$ を学習データセット $\mathcal{D}$ および $p(x)$、$p'(x)$ を用いて導け。

## **Kai**
### 設問1

$$
\overline{x} = \frac{1}{n} \sum_{i=1}^n x_i,\quad
\overline{y} = \frac{1}{n} \sum_{i=1}^n y_i,\quad
\overline{xy} = \frac{1}{n} \sum_{i=1}^n x_iy_i
$$

とおくと、

$$
\begin{align}
\frac{\partial \hat{J}(a, b)}{\partial a}
&= -\frac{2}{n} \sum_{i=1}^{n} (y_i - ax_i - b) x_i
= -2(\overline{xy} - a \overline{x^2} -b\overline{x})
= 0 \tag{i} \\
\frac{\partial \hat{J}(a, b)}{\partial b}
&= -\frac{2}{n} \sum_{i=1}^{n} (y_i - ax_i - b)
= -2(\overline{y} - a \overline{x} -b)
= 0 \tag{ii}
\end{align}
$$

により

$$
b = \overline{y} - a\overline{x}
$$

を得る。式 (i) に代入すると、

$$
\begin{aligned}
&\overline{xy} - a \overline{x^2}-(\overline{y} - a\overline{x})\overline{x} = 0 \\
&\Rightarrow \hat{a} = \frac{\overline{xy} - \overline{x}\cdot\overline{y}}{\overline{x^2}- \overline{x}^{2}} = \frac{\sum_i x_iy_i - n(\sum_i x_i)(\sum_i y_i)}{\sum_i x_i^2 - n(\sum_i x_i)^2}
\end{aligned}
$$

がわかる。

ここで、$x$ の分散を $\sigma_x^2$ とおく、$x$ と $y$ の共分散を $\sigma_{xy}$ とおくと、

$$
\begin{aligned}
n \sigma_{xy} &= \sum_{i=1}^n (x_i - \overline{x})(y_i - \overline{y}) = \overline{xy} - \overline{x}\cdot\overline{y} - \overline{x}\cdot\overline{y}+ \overline{x}\cdot\overline{y} = \overline{xy} - \overline{x}\cdot\overline{y} \\
n\sigma_x^2 &= n \left( \overline{x^2}- \overline{x}^2\right) = \sum_i x_i^2 - n(\sum_i x_i)^2
\end{aligned}
$$

が分かり、$\hat{a}$ は以下のように表すことができる。

$$
\hat{a} = \frac{\sigma_{xy}}{\sigma_x^2}
$$

### 設問2

$$
\begin{aligned}
\sigma_x^2 &= \frac{1}{5}\sum_{i=1}^5 x_i^2 -\left( \frac{1}{5}\sum_{i=1}^5 x_i \right)^{2} 
= 2 \\[0.7em]
\sigma_{xy}^2 &= \frac{\sum_{i=1}^5(x_i - \overline{x}) \sum_{i=1}^5(y_i - \overline{y})}{n}
= \frac{8}{5}
\end{aligned}
$$

よって、

$$
\hat{a} = \frac{\sigma_{xy}}{\sigma_x^2} = \frac{4}{5}, \quad \hat{b} = \overline{y} - a\overline{x} = \frac{3}{5}
$$

### 設問3
ベイズの定理により、

$$
p^{\prime}(x, y) = p^{\prime}(y|x)p^{\prime}(x) = p(y|x)p^{\prime}(x) = \frac{p(x, y)}{p(x)} p^{\prime}(x)
= \frac{p^{\prime}(x)}{p(x)} p(x, y)
$$

したがって、

$$
J'(a, b) = \int \int\left(y - f(x; a, b)\right)^{2} \cdot \frac{p^{\prime}(x)}{p(x)} p(x, y)dxdy
$$

### 設問4

$$
\hat{J}'(a, b) = \frac{1}{n} \sum_{i=1}^n (y_i - f(x_i; a, b))\cdot \frac{p^{\prime}(x_i)}{p(x_i)}
$$

### 設問5
**設問1**同様に計算すれば良い。ここで、$q_i = \frac{p'(x_i)}{p(x_i)}$ とおく。

$$
\begin{align}
\frac{\partial \hat{J}'(a, b)}{\partial a}
&= -\frac{2}{n} \sum_{i=1}^{n} (y_i - ax_i - b) x_i q_i
= -2(\overline{xyq} - a \overline{x^2q} -b\overline{xq})
= 0 \tag{iii} \\
\frac{\partial \hat{J}'(a, b)}{\partial b}
&= -\frac{2}{n} \sum_{i=1}^{n} (y_i - ax_i - b)q_i
= -2(\overline{yq} - a \overline{xq} -b\overline{q})
= 0  \tag{iv}
\end{align}
$$

整理すると、

$$
b = \frac{\overline{yq} - a\overline{xq}}{\overline{q}}
$$

を得る。これを式 (iii) に代入すると、

$$
\begin{aligned}
&\overline{xyq} - a \overline{x^2q} -\frac{\overline{yq} - a\overline{xq}}{\overline{q}} \overline{xq} = 0 \\
&\Rightarrow \hat{a} = \frac{\overline{xyq}\cdot\overline{q} - \overline{xq}\cdot\overline{yq}}{\overline{x^2q}\cdot\overline{q} - \overline{xq}^2}
\end{aligned}
$$

したがって、

$$
\hat{b} = \frac{\overline{yq} - \hat{a}\overline{xq}}{\overline{q}}
$$