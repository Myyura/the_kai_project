---
sidebar_label: "2016年度 II-3（物理数学）"
tags:
  - Kyoto-University
  - Probability-Statistics.Stochastic-Processes.First-Return-Time-of-One-Dimensional-Random-Walk
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2016年度 II-3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

一次元対称ランダムウォークを $S_n=\sum_{i=1}^nX_i$、$S_0=0$ で定める。独立な $X_i$ は $+1,-1$ を等確率でとる。経路の各位置を $s_i$ と書く。図1は $n=10000$ の経路の一例である。

![図1：10000ステップのランダムウォークの経路例（原題）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2016-II-3-fig1.png)

1. $\langle S_n\rangle$ と分散を求めよ。
2. $2m$ ステップ後に原点にいる事象を $S^0_{2m}$ とし、その確率 $u_{2m}$ を求めよ。スターリングの公式 $n!\sim e^{-n}n^n\sqrt{2\pi n}$ から大きい $m$ の漸近形を求めよ。$u_0=1$ とする。

出発後 $k$ ステップの間すべて $s_i>0$ である事象を $S_k^>$、すべて $s_i\ge0$ である事象を $S_k^\ge$ とする。$S_{2m}^\ge$ と $S_{2m}^0$ の経路数は一対一対応によって等しく、$P(S_{2m}^\ge)=u_{2m}$ であることは既知としてよい。図2は $S_6^>$、$S_6^\ge$、$S_6^0$ に属する経路の例である。

![図2：正・非負・原点復帰の各事象に属する経路例（原題）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2016-II-3-fig2.png)

3. $S_{2m}^>$ と $S_{2m-1}^\ge$ の経路数が等しいことを示し、$P(S_{2m}^\ge),P(S_{2m-1}^\ge),P(S_{2m}^>)$ の関係を求めよ。
4. 原点から $2k$ ステップ後に原点に戻り、その後 $2m-2k$ ステップは正である事象の確率を

$$
\alpha_{2k,2m}=P(S^0_{2k})P(S^>_{2m-2k})
$$

とする。これを $u_{2j}$ で表し、$m,k,m-k\gg1$ の漸近形を $x=k/m$ の関数で表せ。

原点より上にいるステップ数が $2k$ である事象を $Q_{2k,2m}$ とし、確率を $\beta_{2k,2m}$ とする。ただし $s_{2i}=0$ のとき、その符号は $s_{2i-1}$ と同じとみなす。以下の手順で $\beta_{2k,2m}=2\alpha_{2k,2m}$ を調べる。

5. 初めて原点に戻る時刻が $2i$ である確率を $f_{2i}$ とする。$u_{2m}$ を $f_{2i},u_{2j}$ で表せ。
6. 最初の帰還までの符号で経路を二つに分け、$\beta_{2k,2m}$ の再帰式を $f_{2a}$ と短い経路の $\beta$ で表せ。
7. 短い経路について帰納法を用い、$\beta_{2k,2m}$ を $u_{2j}$ で表せ。

#### 题目描述

一维对称随机游走满足 $S_n=\sum_{i=1}^nX_i$、$S_0=0$，各独立步长 $X_i=\pm1$ 等概率。路径位置记作 $s_i$，上图1给出了 $n=10000$ 的一条路径。

1. 求均值与方差。
2. 求 $2m$ 步后回原点的概率 $u_{2m}$ 及大 $m$ 渐近式，取 $u_0=1$。

$S_k^>$ 表示前 $k$ 步位置始终严格为正，$S_k^\ge$ 表示始终非负。已知 $P(S_{2m}^\ge)=u_{2m}$；上图2为 $S_6^>$、$S_6^\ge$、$S_6^0$ 的路径示例。

3. 证明严格正的 $2m$ 步路径与非负的 $2m-1$ 步路径数相同，求相应三种概率的关系。
4. 定义 $\alpha_{2k,2m}=u_{2k}P(S_{2m-2k}^>)$，表示先在 $2k$ 步回原点、以后严格为正的概率。用 $u$ 表示并求 $m,k,m-k\gg1$ 时关于 $x=k/m$ 的渐近式。

$Q_{2k,2m}$ 表示在原点上方的步数为 $2k$，其概率为 $\beta_{2k,2m}$；偶数时刻为零时归入上一步的符号。按下列步骤研究 $\beta=2\alpha$。

5. $f_{2i}$ 为首次返回概率，用 $f$ 和 $u$ 表示 $u_{2m}$。
6. 按首次返回前的正负划分，写出 $\beta$ 的递推关系。
7. 用较短路径的归纳假设，求 $\beta$ 的显式式子。

## **Kai**

### (1)
$\langle X_i\rangle=0$、$\langle X_i^2\rangle=1$、異なる増分は独立なので

$$
\boxed{\langle S_n\rangle=0,\qquad\operatorname{Var}(S_n)=n}.
$$

### (2)
原点に戻るには正負のステップがそれぞれ $m$ 回必要である。

$$
\boxed{u_{2m}=\frac1{2^{2m}}\binom{2m}{m}\sim\frac1{\sqrt{\pi m}}}.
$$

### (3)
厳密に正の経路から最初の $+1$ のステップを除き、高さを 1 下げれば、長さ $2m-1$ の非負経路になる。この操作は可逆なので経路数は等しい。分母となる全経路数は 2 倍違うから

$$
P(S_{2m-1}^\ge)=2P(S_{2m}^>).
$$

非負な奇数長経路の終点は少なくとも 1 なので、末尾にどちらのステップを加えても非負である。よって

$$
\boxed{P(S_{2m}^\ge)=P(S_{2m-1}^\ge)=2P(S_{2m}^>)=u_{2m}}.
$$

### (4)
$0\le k<m$ に対して独立性と (3) から

$$
\boxed{\alpha_{2k,2m}=\frac12u_{2k}u_{2(m-k)}}.
$$

両区間が長いとき

$$
\boxed{\alpha_{2k,2m}\sim\frac1{2\pi\sqrt{k(m-k)}}
=\frac1{2\pi m\sqrt{x(1-x)}}}.
$$

### (5)
最初の帰還が $2i$ の経路を分けると、その後の $2m-2i$ ステップは独立な原点帰還経路なので

$$
\boxed{u_{2m}=\sum_{i=1}^mf_{2i}u_{2(m-i)}}.
$$

### (6)
$0<k<m$ では、最初の帰還前が正なら正の滞在時間 $2r$ を使い、負なら正の滞在時間は使わない。両方の確率は $f_{2r}/2$ である。

$$
\boxed{\beta_{2k,2m}
=\frac12\sum_{r=1}^kf_{2r}\beta_{2(k-r),2(m-r)}
+\frac12\sum_{r=1}^{m-k}f_{2r}\beta_{2k,2(m-r)}}.
$$

端点では、全期間を正側または負側にいる確率は、零点の符号規約から非負経路の確率に等しく

$$
\boxed{\beta_{0,2m}=\beta_{2m,2m}=u_{2m}}.
$$

### (7)
短い経路について $\beta_{2j,2\ell}=u_{2j}u_{2(\ell-j)}$ を仮定し (6) に代入すると

$$
\begin{aligned}
\beta_{2k,2m}
&=\frac{u_{2(m-k)}}2\sum_{r=1}^kf_{2r}u_{2(k-r)}
+\frac{u_{2k}}2\sum_{r=1}^{m-k}f_{2r}u_{2(m-k-r)}\\
&=\boxed{u_{2k}u_{2(m-k)}}.
\end{aligned}
$$

端点の結果と $m=0$ を初期条件として帰納法が成立する。したがって $0\le k<m$ では $\beta_{2k,2m}=2\alpha_{2k,2m}$。

$k=m$ では後半が空の区間であり、事象の通常の定義では $P(S_0^>)=1$、従って $\alpha_{2m,2m}=u_{2m}$ である。端点にも $\beta=2\alpha$ と書くには、$\alpha_{2m,2m}=u_{2m}/2$ という端点への延長規約が必要となる。滞在時間の確率 $\beta_{2k,2m}=u_{2k}u_{2(m-k)}$ は両端を含め成立する。

## **Reference**

- [京都大学公式問題（2016年度、PDF 13–14ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H28.pdf)
