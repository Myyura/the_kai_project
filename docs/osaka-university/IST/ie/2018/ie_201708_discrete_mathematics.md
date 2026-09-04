---
sidebar_label: 2018年度 離散構造
tags:
  - Osaka-University
  - Computer-Science.Algorithm-Design.Tower-of-Hanoi
  - Discrete-Mathematics.Mathematical-Logic
---
# 大阪大学 情報科学研究科 情報工学 2018年度 離散構造

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
### (1) リストと述語論理

空リストを $[]$、先頭 $H$ と残部 $T$ のリストを $[H|T]$ とする。$append(X,Y,Z)$ は $X$ と $Y$ の連結が $Z$、$reverse(X,Y)$ は $X$ の逆順が $Y$ を表す。

- (1-1) 空リストと任意の $X$ の連結が $X$ であることを閉論理式で表せ。
- (1-2) $append(X,Y,Z)$ なら、$X,Z$ の先頭に同じ要素 $A$ を加えても連結関係が成立することを閉論理式で表せ。
- (1-3) 空リストの逆順が空リストであることを表せ。
- (1-4) $\forall A\forall X\forall Y\forall Z((reverse(X,Y)\land append(Y,[A],Z))\to reverse(\alpha,Z))$ の $\alpha$ を埋めよ。
- (1-5-1) 原子論理式 $P_{ij},Q_i,R_j$ からなる

$$
\left(\bigwedge_{i=1}^m\forall x_1\cdots\forall x_h((\bigwedge_{j=1}^{n_i}P_{ij})\to Q_i)\right)\to\exists x_1\cdots\exists x_h\bigwedge_{j=1}^kR_j
$$

の否定を、含意を使わず $\forall x_1\cdots\forall x_h(\beta\land\gamma)$ と表せ。ただし $x_1,\ldots,x_h$ は原子論理式に現れる変数、$h\ge1$、$n_1,\ldots,n_m\ge0$ とする。

- (1-5-2) (1-1)～(1-4)の論理式と上の否定式を用い、導出原理により $reverse([a|[b]],W)$ の解の存在と $W$ への代入を示し、探索過程を記せ。ただし $a,b$ は要素を表す定数、$W$ はリストを表す変数とする。

### (2) 円盤の移動

大小の異なる $n$ 枚の円盤を小さい順に $1,\ldots,n$ とする。大きい円盤を小さい円盤の上には置けず、一度に最上部の1枚だけを移動する。$S_k(i,j)$ は円盤 $i,\ldots,j$ がすべて棒 $k$ にある状態である。

- (2-1) 棒3本で $S_1(1,n)$ から $S_3(1,n)$ へ移す最短回数 $f_n$ を漸化式から求めよ。また円盤 $i$ が初めて移る行先を求めよ。
- (2-2) $1\le d\le n$ とする。棒4本で、円盤 $1,\ldots,d$ は棒2を、円盤 $d+1,\ldots,n$ は棒3を使えない。途中で $S_3(1,d)$ を通り、$S_1(1,n)$ から $S_4(1,n)$ へ移す最短回数 $g_n$ を $n,d$ で表せ。さらに $f_n=g_n$ となる $d$ を求めよ。

## **Kai**
### (1)

$$
\begin{aligned}
(1\text{-}1)\;&\forall X\ append([],X,X),\\
(1\text{-}2)\;&\forall A\forall X\forall Y\forall Z\bigl(append(X,Y,Z)\to append([A|X],Y,[A|Z])\bigr),\\
(1\text{-}3)\;&reverse([],[]),\\
(1\text{-}4)\;&\boxed{\alpha=[A|X]}.
\end{aligned}
$$

(1-5-1)

$$
\boxed{\beta=\bigwedge_{i=1}^m(\neg P_{i1}\lor\cdots\lor\neg P_{in_i}\lor Q_i),\quad
\gamma=\neg R_1\lor\cdots\lor\neg R_k}.
$$

束縛変数はあらかじめ必要に応じて改名する。$n_i=0$ の節は $Q_i$ である。

(1-5-2) 否定した目標節から、逆順の再帰節、連結の再帰節、基底節の順に導出する。対応する目標の列は

$$
\begin{aligned}
reverse([a,b],W)
&\Rightarrow reverse([b],Y),\ append(Y,[a],W)\\
&\Rightarrow reverse([],Z),\ append(Z,[b],Y),\ append(Y,[a],W)\\
&\Rightarrow append([],[b],Y),\ append(Y,[a],W)\\
&\Rightarrow append([b],[a],W)\\
&\Rightarrow append([],[a],T),\quad W=[b|T]\\
&\Rightarrow \square,\quad T=[a].
\end{aligned}
$$

よって $\boxed{W=[b,a]}$。

### (2)

(2-1) 最大円盤を移す前後に残る $n-1$ 枚の移動が必要なので

$$
f_0=0,\quad f_n=2f_{n-1}+1,\qquad\boxed{f_n=2^n-1}.
$$

円盤 $n$ の初回の行先は棒3で、円盤番号が一つ小さくなるごとに棒2と棒3が入れ替わる。したがって円盤 $i$ は $n-i$ が偶数なら棒3、奇数なら棒2へ初めて移る。

(2-2-1) 小円盤群を棒1から棒3へ移し、大円盤群を棒1から棒4へ移し、小円盤群を棒3から棒4へ移す。各群は許された3本の棒を用いるため

$$
\boxed{g_n=2f_d+f_{n-d}=2^{d+1}+2^{n-d}-3}.
$$

指定の中間状態の前後で小円盤群には各 $f_d$ 回、大円盤群には $f_{n-d}$ 回以上必要なので、この手順は最短である。

(2-2-2) $x=2^d$ とおくと

$$
2x+2^n/x=2^n+2\iff (x-1)(2x-2^n)=0.
$$

$1\le d\le n$ より $x\ne1$ なので、$\boxed{d=n-1\ (n\ge2)}$。$n=1$ には該当する $d$ はない。
