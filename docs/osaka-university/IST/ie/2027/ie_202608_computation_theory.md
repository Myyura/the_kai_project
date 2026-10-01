---
sidebar_label: 2026年8月実施 4. 【選択問題】計算理論
sidebar_position: 4
tags:
  - Osaka-University
  - Computer-Science.Formal-Languages.Context-Free-Grammar
  - Computer-Science.Formal-Languages.Nondeterministic-Pushdown-Automaton
  - Computer-Science.Formal-Languages.Regular-Expression
---
# 大阪大学 情報科学研究科 情報工学 2026年8月実施 4. 【選択問題】計算理論

## **Author**

[xxxuuu](https://github.com/xxxuuu)

## **Description**

配点：(1-1) 10，(1-2) 20，(1-3) 30，(2) 25，(3-1) 10，(3-2) 30

文脈自由文法（context-free grammar）を $G=(V,T,R,S)$ で表す。$V$ は変数（variable）の有限集合（finite set）を表し，$T$ は終端記号（terminal symbol）の有限集合を表す。$R$ は生成規則（production rule）の有限集合を表し，$S$ は開始記号（start symbol）を表す。生成規則は頭部（head）$A\in V$ および本体（body）$B\in(V\cup T)^*$ からなり，$A\to B$ と表記する。$*$ はスター（star）演算を表す。

最終状態による受理（acceptance by final state）を行う非決定性プッシュダウンオートマトン（non-deterministic pushdown automaton）を NPDA と呼ぶものとし，$P=(Q,\Sigma,\Gamma,\delta,q_0,Z,F)$ で表す。$Q$ は状態（state）の有限集合を表し，$\Sigma$ は入力記号（input symbol）の有限集合を表す。$\Gamma$ はスタック記号（stack symbol）の有限集合である。$\delta:Q\times(\Sigma\cup\{\varepsilon\})\times\Gamma\to\mathcal{P}(Q\times\Gamma^*)$ は遷移関数（transition function）を表す。$\varepsilon$ は空文字列（empty string）であり，$\mathcal{P}(Q\times\Gamma^*)$ は $Q\times\Gamma^*$ のべき集合（power set）である。$(q',X)\in\delta(q,s,\gamma)$ は，スタックの上端に $\gamma$ があるとき，状態 $q$ にある $P$ が入力 $s$ を読んで，スタックから $\gamma$ を取り除き（pop），列 $X$ の右側の記号から順にスタックに押し込んで（push），次状態 $q'$ に遷移できることを意味する。$s=\varepsilon$ の場合は，$P$ は入力を読まずにスタック操作と遷移を行える。$X=\varepsilon$ ならば，$P$ はスタックに記号を押し込まない。$q_0\in Q$ は初期状態（initial state）を表し，$Z\in\Gamma$ はスタックの開始記号（initial pushdown symbol）を表す。$F\subseteq Q$ は最終状態の集合である。

アルファベット（alphabet）$\mathcal{A}$ 上の文字列（string）$w\in\mathcal{A}^*$ に対し，$w$ に含まれる記号 $a\in\mathcal{A}$ の数を $N_a(w)$ とする。

以下の各問に答えよ。

### (1)

以下に定義する文脈自由文法 $G_1$ が生成する，アルファベット $\{0,1\}$ 上の言語（language）を $L_1$ とする。

$$
G_1=(\{S\},\{0,1\},R_1,S)
$$

$$
R_1=\{S\to0S1,\ S\to SS,\ S\to1S0,\ S\to\varepsilon\}
$$

以下の各小問に答えよ。

#### (1-1)

$L_1$ に属する長さ4以下の文字列を全て示せ。

#### (1-2)

$L_1$ に属する任意の文字列 $w$ について，$N_0(w)=N_1(w)$ が成り立つことを帰納法（induction）で証明せよ。

#### (1-3)

$L_1$ を受理する NPDA $P_1=(\{q_0,q_1\},\{0,1\},\{0,1,Z\},\delta_1,q_0,Z,\{q_1\})$ を構成したい。全ての $(q,s,\gamma)\in\{q_0,q_1\}\times\{0,1,\varepsilon\}\times\{0,1,Z\}$ について $\delta_1(q,s,\gamma)$ を列挙することで，$\delta_1$ を定義せよ。ただし，$\delta_1(q_0,0,Z)=\{(q_0,0Z)\}$，$\delta_1(q_0,0,0)=\{(q_0,00)\}$ とすること。$\delta_1(q,s,\gamma)$ が空集合（empty set）となる場合は省略してよい。

### (2)

$k$ を1以上の整数とする。ある $k$ に対して，アルファベット $\{0,1\}$ 上の言語 $L_2$ を以下のように定義する。$\operatorname{abs}(n)$ は，整数 $n$ の絶対値を表す。

$$
L_2=\{w\in\{0,1\}^*\mid \operatorname{abs}(N_0(w)-N_1(w))=k\}
$$

$L_2$ を受理する3状態の NPDA $P_2=(\{q_0,q_1,q_2\},\{0,1\},\{0,1,Z\},\delta_2,q_0,Z,\{q_2\})$ を構成できるか。構成できる場合は，全ての $(q,s,\gamma)\in\{q_0,q_1,q_2\}\times\{0,1,\varepsilon\}\times\{0,1,Z\}$ について $\delta_2(q,s,\gamma)$ を列挙することで，そのときの $\delta_2$ の定義を示せ。$\delta_2(q,s,\gamma)$ が空集合となる場合は省略してよい。構成できない場合は理由を説明せよ。

### (3)

正則（正規）表現（regular expression）$0^*1(0+1)^*$ が表す言語を $L_3$ とする。ただし，$+$ は和集合（union）演算を表す。

以下の各小問に答えよ。

#### (3-1)

あいまい（ambiguous）でない文脈自由文法の定義を簡潔に示せ。

#### (3-2)

文脈自由文法 $G_2=(\{S,A\},\{0,1\},R_2,S)$ が，$L_3$ を生成するあいまいでない文法となるよう，$R_2$ を定義せよ。ただし，生成規則の個数は5以下とし，$\varepsilon$-規則は用いないこと。さらに，$G_2$ があいまいでないことを数行で説明せよ。
