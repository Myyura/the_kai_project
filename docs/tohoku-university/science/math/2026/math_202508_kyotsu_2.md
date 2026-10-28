---
sidebar_label: "2025年8月実施 共通問題 [2]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Hausdorff-Space
  - Mathematics.Topology.Continuity-and-Homeomorphisms
---

# 東北大学 理学研究科 数学専攻 2025年8月実施 共通問題 \[2\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#a76cdae8-3ec3-477f-bce7-7cab0be9e88c) refined with GPT 6 Astra)

## **Description**

以下の問いに答えよ。

(1) $\mathcal O_{\mathbb R}$ を $\mathbb R$ のユークリッド位相の開集合系とする。$X=\mathbb R\times\{1,-1\}$ とする。$X$ の位相 $\mathcal O_X$ を

$$
\mathcal O_X=\{(U\times\{1\})\cup(U'\times\{-1\})\mid U,U'\in\mathcal O_{\mathbb R}\}
$$

と定める。$X$ 上の同値関係 $\sim$ を、$p,q\in\mathbb R$、$s,t\in\{1,-1\}$ に対し

$$
(p,s)\sim(q,t)\quad\Longleftrightarrow\quad
(p,s)=(q,t)\text{ または }p=q\in\mathbb R\setminus\{0\}
$$

と定める。$Y=X/\sim$ とおき、標準的射影を $\pi:X\to Y$ とおく。$\pi$ の定める $Y$ 上の商位相を $\mathcal O_Y$ とおく。位相空間 $(Y,\mathcal O_Y)$ はハウスドルフ空間であるかどうか、理由とともに答えよ。

(2) $Z$ をハウスドルフな位相空間とし、$W$ を位相空間とする。$f:Z\to W$ は全射であり、かつ任意の $w\in W$ に対し $f^{-1}(\{w\})$ が有限集合であるとする。このとき、以下の (i)、(ii) の命題はそれぞれ真であるか。真であるならばそのことを証明せよ。偽であるならば反例をあげ、実際に反例になっていることを証明せよ。

(i) $f$ が連続な開写像であるならば、$W$ はハウスドルフ空間である。

(ii) $f$ が閉写像であるならば、$W$ はハウスドルフ空間である。

ここで、写像 $f:Z\to W$ について、$f$ が開写像であるとは $Z$ の任意の開集合 $U$ に対し $f(U)$ が $W$ の開集合であることをいい、$f$ が閉写像であるとは $Z$ の任意の閉集合 $F$ に対し $f(F)$ が $W$ の閉集合であることをいう。

### 题目描述

回答下列问题。

(1) 设 $\mathcal O_{\mathbb R}$ 为 $\mathbb R$ 的欧几里得拓扑的开集族，$X=\mathbb R\times\{1,-1\}$。定义 $X$ 的拓扑

$$
\mathcal O_X=\{(U\times\{1\})\cup(U'\times\{-1\})\mid U,U'\in\mathcal O_{\mathbb R}\}.
$$

对于 $p,q\in\mathbb R$、$s,t\in\{1,-1\}$，定义 $X$ 上的等价关系

$$
(p,s)\sim(q,t)\quad\Longleftrightarrow\quad
(p,s)=(q,t)\text{ 或 }p=q\in\mathbb R\setminus\{0\}.
$$

令 $Y=X/\sim$，$\pi:X\to Y$ 为自然投影，$\mathcal O_Y$ 为 $\pi$ 确定的商拓扑。判断 $(Y,\mathcal O_Y)$ 是否为豪斯多夫空间，并说明理由。

(2) 设 $Z$ 为豪斯多夫拓扑空间，$W$ 为拓扑空间。设 $f:Z\to W$ 为满射，且对每个 $w\in W$，$f^{-1}(\{w\})$ 都是有限集。分别判断下列命题 (i)、(ii) 是否正确。若正确则证明；若错误则给出反例，并证明其确为反例。

(i) 若 $f$ 是连续开映射，则 $W$ 是豪斯多夫空间。

(ii) 若 $f$ 是闭映射，则 $W$ 是豪斯多夫空间。

这里，$f:Z\to W$ 为开映射是指 $Z$ 的任意开集 $U$ 的像 $f(U)$ 都是 $W$ 的开集；$f$ 为闭映射是指 $Z$ 的任意闭集 $F$ 的像 $f(F)$ 都是 $W$ 的闭集。

## **Kai**

### (1)

ハウスドルフ空間ではない。$o_+=\pi(0,1)$ と $o_-=\pi(0,-1)$ は異なる点である。これらの任意の開近傍をそれぞれ $V_+,V_-$ とする。商位相の定義から $\pi^{-1}(V_\pm)$ は $X$ の開集合である。よって、ある $\varepsilon_+,\varepsilon_->0$ が存在して

$$
(-\varepsilon_+,\varepsilon_+)\times\{1\}\subset\pi^{-1}(V_+),\qquad
(-\varepsilon_-,\varepsilon_-)\times\{-1\}\subset\pi^{-1}(V_-).
$$

$0<|p|<\min(\varepsilon_+,\varepsilon_-)$ と取ると、$\pi(p,1)=\pi(p,-1)$ が $V_+\cap V_-$ に属する。したがって $o_+,o_-$ を交わらない開近傍で分離できない。

### (2)(i)

偽である。(1) の $Z=X$、$W=Y$、$f=\pi$ を取る。$X$ は二本の実数直線の直和であるからハウスドルフであり、$\pi$ は連続な全射である。各ファイバーは、座標 $p\ne0$ なら二点、$p=0$ なら一点からなる。

また、$U\subset\mathbb R$ が開集合なら

$$
\pi^{-1}(\pi(U\times\{1\}))
=(U\times\{1\})\cup((U\setminus\{0\})\times\{-1\})
$$

は $X$ で開いている。$\{-1\}$ 側も同様であり、$X$ の任意の開集合はこのような集合の和である。したがって $\pi$ は開写像である。しかし (1) より $Y$ はハウスドルフではないので、反例となる。

### (2)(ii)

真である。$w_1\ne w_2$ とし、$F_i=f^{-1}(\{w_i\})$ とおく。$F_1,F_2$ は互いに交わらない非空有限集合である。ハウスドルフ性により各 $x\in F_1,y\in F_2$ を互いに交わらない開集合 $U_{xy},V_{xy}$ で分離できる。有限回の共通部分と和を取って

$$
U=\bigcup_{x\in F_1}\bigcap_{y\in F_2}U_{xy},\qquad
V=\bigcup_{y\in F_2}\bigcap_{x\in F_1}V_{xy}
$$

とすれば、$U,V$ は $F_1,F_2$ をそれぞれ含む互いに交わらない開集合となる。

$f$ は閉写像なので

$$
G_1=W\setminus f(Z\setminus U),\qquad
G_2=W\setminus f(Z\setminus V)
$$

は開集合であり、$w_i\in G_i$ である。もし $w\in G_1\cap G_2$ なら、$f^{-1}(\{w\})\subset U\cap V=\varnothing$ となり、全射性に反する。よって $G_1\cap G_2=\varnothing$ であり、$W$ はハウスドルフである。

## **Reference**

- [東北大学公式問題（2026年度・共通問題、PDF 2ページ）](https://www.math.tohoku.ac.jp/exam/questions/2026_R8_kyotsu.pdf#page=2)
- [L^2：2026年度の解答](https://note.com/normalmath/n/n89152917de11#a76cdae8-3ec3-477f-bce7-7cab0be9e88c)
