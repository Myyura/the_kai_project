---
sidebar_label: 2020年度 離散構造
tags:
  - Osaka-University
  - Discrete-Mathematics.Mathematical-Logic
  - Discrete-Mathematics.Graph-Theory
---
# 大阪大学 情報科学研究科 情報工学 2020年度 離散構造

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
### (1) ロボットの動作

状態 $s$ について、$on(s)$ はロボットが台に乗っていること、$sl(s,x)$ は台が位置 $x$ にあること、$have(s)$ はバッテリーを持つことを表す。$move(s,x),climb(s),grasp(s)$ はそれぞれ台を位置 $x$ へ動かす、台に登る、バッテリーを掴む動作後の状態である。次を仮定する。

$$
\begin{aligned}
A&=\forall s\forall x(sl(s,x)\to sl(climb(s),x)),\\
B&=\forall s((sl(s,goal)\land on(s))\to have(grasp(s))),\\
C&=\forall s\forall x(\neg on(s)\to sl(move(s,x),x)),\\
D&=\forall s\ on(climb(s)).
\end{aligned}
$$

- (1-1) $C,D$ の意味を説明せよ。
- (1-2-1) バッテリーを持つ状態の存在を閉論理式 $E$ で表せ。
- (1-2-2) $F=(A\land B\land C\land D)\to E$ の否定を、母式が連言標準形の冠頭標準形にせよ。$A$〜$E$ の略号を使わないこと。
- (1-2-3) 上の冠頭標準形をスコーレム化して導出原理を適用したが空節を導けなかった。これは初期条件を考慮していないためである。導出原理により $E$ を成立させるための初期状態 $s_0$ の条件 $I$ を示し、導出過程も示せ。台の初期位置は $goal$ ではない。
- (1-2-4) $I$ を前提に加えた後の導出で、$E$ の状態変数への代入として得られる動作列を示せ。

### (2) グラフ

頂点集合と辺集合がともに空でない無向グラフを考える。

$G_1$ の頂点は $a,b,c,d,e$、辺は $ab,bc,ad,bd,cd,be,de$。$G_2$ の頂点は $a,b,c,d,e,f$、辺は $ab,bc,ca,be,de,ef,fd$ である。

- (2-1) 各グラフで、任意の1辺を取り除いても連結か判定し、そうでなければ切断する辺を示せ。
- (2-2-1) 自己ループを持たず、各頂点が少なくとも1本の辺に接続し、全頂点の次数が偶数の連結無向グラフ $G$ を考える。任意の辺 $(u,v)$ を除いた $G'$ にも $v$ から $u$ への経路があることを示せ。$G'$ が連結でないと仮定し、「任意のグラフの全頂点の次数和は偶数」という補題を用いて矛盾を導くこと。
- (2-2-2) 任意の頂点 $u$ を含み、各辺を高々1回しか使わない閉路があることを示せ（頂点の重複は許す）。(2-2-1)は成り立つものとしてよい。

## **Kai**
### (1)

(1-1) $C$ は、ロボットが台に乗っていなければ台を任意の位置へ移動できることを表す。$D$ は、登る動作の後ではロボットが台に乗っていることを表す。

(1-2-1) $\boxed{E=\exists s\ have(s)}$。

(1-2-2) 束縛変数を相互に区別すると、求める式は

$$
\forall s_1\forall x_1\forall s_2\forall s_3\forall x_3\forall s_4\forall s_5\left[\begin{aligned}
&(\neg sl(s_1,x_1)\lor sl(climb(s_1),x_1))\\
{}\land{}&(\neg sl(s_2,goal)\lor\neg on(s_2)\lor have(grasp(s_2)))\\
{}\land{}&(on(s_3)\lor sl(move(s_3,x_3),x_3))\\
{}\land{}&on(climb(s_4))\land\neg have(s_5)
\end{aligned}\right].
$$

(1-2-3) $\boxed{I=\neg on(s_0)}$ を加える。$m=move(s_0,goal)$、$c=climb(m)$ と書くと、次の単位節が順に導かれる。

$$
\begin{aligned}
\neg on(s_0),\ C&\vdash sl(m,goal),\\
sl(m,goal),\ A&\vdash sl(c,goal),\\
D&\vdash on(c),\\
sl(c,goal),\ on(c),\ B&\vdash have(grasp(c)),\\
have(grasp(c)),\ \neg have(s_5)&\vdash\square.
\end{aligned}
$$

(1-2-4)

$$
\boxed{s=grasp(climb(move(s_0,goal)))}.
$$

すなわち「台を $goal$ へ移動→台に登る→バッテリーを掴む」である。

### (2)

(2-1) $G_1$ は全ての辺が閉路上にあるので、どの1辺を除いても連結。$G_2$ は $\boxed{be}$ を除くと二つの三角形に分かれ、連結でなくなる。

(2-2-1) $(u,v)$ を除いて非連結になると仮定し、$u$ を含む連結成分を $C$ とする。$C$ 内では $u$ だけ次数が奇数、他は偶数である。よって次数和が奇数となり、握手補題に反する。したがって $G'$ は連結で、所要の経路がある。

(2-2-2) $u$ に接続する辺 $(u,v)$ を一つ選ぶ。(2-2-1)により、その辺を使わない $v$ から $u$ への単純経路がある。これに $(u,v)$ を加えれば、$u$ を含み辺の重複がない閉路を得る。
