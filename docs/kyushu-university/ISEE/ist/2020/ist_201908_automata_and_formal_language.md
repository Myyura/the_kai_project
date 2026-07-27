---
sidebar_label: "2019年8月実施 オートマトンと言語"
tags:
  - Kyushu-University
  - Computer-Science.Formal-Languages.Deterministic-Finite-Automaton
  - Computer-Science.Formal-Languages.Deterministic-Finite-Automaton-Minimization
  - Computer-Science.Formal-Languages.Context-Free-Grammar
---
# 九州大学 システム情報科学府 情報理工学専攻 2019年8月実施 オートマトンと言語

## **Author**
Casablanca

## **Description**
### 【問１】
決定性有限オートマトン $M_1 = (P, \Sigma, \delta_1, p_1, F_1)$ を考える．
ただし，$P$, $\Sigma$, $\delta_1$, $p_1$, $F_1$ はそれぞれ $M_1$ の状態集合，アルファベット，遷移関数，初期状態，最終状態の集合を表す．
$P = \{p_0, p_1, p_2, p_3\}$, $\Sigma = \{0, 1, 2, 3\}$, $F_1 = \{p_0\}$ であり，$i = 1,2,3,4$ に対し $\delta_1 (p_i, a) = p_{(i + n(a)) \text{ mod } 4}$ である．
ここで $n(a)$ は記号 $a \in \Sigma$ に対応する整数であり，$n(0) = 0$, $n(1) = 1$, $n(2) = 2$, $n(3) = 3$ である．
非負の整数 $x$ と正の整数 $y$ に対し，$x \text{ mod } y$ は $x$ を $y$ で割ったときの余りを表す．
たとえば $\delta_1(p_1, 3) = p_0$ となる．次の各問いに答えよ．

(1) $M_1$ の状態遷移図を与えよ．

(2) 決定性有限オートマトン $M_2 = (P, \Sigma, \delta_1, p_1, F_2)$ は，$M_1$ と同じ状態集合，アルファベット，遷移関数，初期状態を持つ．
$M_2$ と等価な決定性有限オートマトンの最小状態数が $2$ であるとき，最終状態の集合 $F_2 \subseteq P$ の例をひとつ与えよ．

(3) $\Sigma$ 上の文字列 $u$ に対して，

$$
Y(u) = \begin{cases}
    &1 &\text{if } u \text{ is the empty string}, \\
    &Y(v) \times n(a) &\text{if } u = va, v \in \Sigma^*, a \in \Sigma.
\end{cases}
$$

とする．$Y(u) \text{ mod } 6 = 0$ かつ $Y(u) \neq 0$ となる $u$ のみを受理する決定性有限オートマトン $M_3$ を考える．
ただし，$M_3$ の状態集合を $\{q_0, q_1, q_2, q_3, q_6\}$, 初期状態を $q_1$, 最終状態の集合を $\{q_6\}$ とする．
また，各状態は次のような文字列に対応する．

- $q_0$ は $Y(u) = 0$ を満たす文字列 $u$ に対応．
- $q_1$ は $Y(u) \text{ mod } 2 \neq 0$ かつ $Y(u) \text{ mod } 3 \neq 0$ を満たす文字列 $u$ に対応．
- $q_2$ は $Y(u) \text{ mod } 2 = 0$ かつ $Y(u) \text{ mod } 6 \neq 0$ を満たす文字列 $u$ に対応．
- $q_3$ は $Y(u) \text{ mod } 3 = 0$ かつ $Y(u) \text{ mod } 6 \neq 0$ を満たす文字列 $u$ に対応．
- $q_6$ は $Y(u) \text{ mod } 6 = 0$ かつ $Y(u) \neq 0$ を満たす文字列 $u$ に対応．

$M_3$ の状態遷移図を与えよ．

### 【問２】
アルファベット $\Sigma = \{a, b\}$ 上の文字列 $w$ に対し，$w$ の長さを $|w|$ と表す．
また，$1 \leq i \leq |w|$ に対して $w[i]$ は $w$ の $i$ 番目の文字を表す．
$w$ の逆文字列を $w^R$ と表す．
$|x| = |y| \geq 1$ を満たす $\Sigma$ 上の文字列 $x$ と $y$ に対して，$d(x,y) = |\{ i \mid 1 \leq i \leq |x|, x[i] \neq y[i]\}|$ とする．
文字列 $w$ に対し，$w = xyz$ を満たす文字列 $x, z \in \Sigma^*$ が存在するとき，$y$ を $w$ の部分文字列という．
$\#$ は $\Sigma$ に含まれない文字とする．
次の各言語を考える．

$$
\begin{aligned}
L_0 &= \{w \mid w \in \Sigma^*, w = w^R\} \\
L_1 &= \{wxw^R \mid w \in \Sigma^*, x \in \Sigma\} \\
L_2 &= \{uxvw \mid u, v, w \in \Sigma^*, uv = w^R, x \in \Sigma\} \\
L_3 &= \{uv \mid u, v \in \Sigma^*, |u| = |v| \geq 1, d(u^R, v) \leq 1\} \\
L_4 &= \{x \# w \mid x, w \in \Sigma^*, x^R \text{ is a substring of } w\}
\end{aligned}
$$

これらの言語はすべて文脈自由言語である．例えば，言語 $L_0$ は以下の生成規則を持つ文脈自由文法によって生成される．

$$
S \to aSa \mid bSb \mid a \mid b \mid \varepsilon
$$

ただし，$\varepsilon$ は空文字列を表す．

次の問いに答えよ．

(1) 言語 $L_1$ を生成する文脈自由文法の生成規則を与えよ．ただし，非終端記号を $S$ とし，開始記号を $S$ とする．

(2) 言語 $L_2$ を生成する文脈自由文法の生成規則を与えよ．ただし，非終端記号を $S, T$ とし，開始記号を $S$ とする．

(3) 言語 $L_3$ を生成する文脈自由文法の生成規則を与えよ．ただし，非終端記号を $S, T$ とし，開始記号を $S$ とする．

(4)  言語 $L_4$ を生成する文脈自由文法の生成規則を与えよ．ただし，非終端記号を $S, T, X$ とし，開始記号を $S$ とする．

### 题目描述

【问题 1】考虑确定性有限自动机
$M_1=(P,\Sigma,\delta_1,p_1,F_1)$，其中 $P$、$\Sigma$、$\delta_1$、$p_1$、$F_1$ 依次表示状态集合、字母表、转移函数、初始状态和终态集合。已知
$P=\{p_0,p_1,p_2,p_3\}$、$\Sigma=\{0,1,2,3\}$、$F_1=\{p_0\}$，题面给定对 $i=1,2,3,4$ 有
$\delta_1(p_i,a)=p_{(i+n(a))\bmod 4}$。这里，$n(0)=0$、$n(1)=1$、$n(2)=2$、$n(3)=3$；对非负整数 $x$ 和正整数 $y$，$x\bmod y$ 表示 $x$ 除以 $y$ 的余数，例如 $\delta_1(p_1,3)=p_0$。回答：

1. 画出 $M_1$ 的状态迁移图。
2. 确定性有限自动机 $M_2=(P,\Sigma,\delta_1,p_1,F_2)$ 与 $M_1$ 具有相同的状态集合、字母表、转移函数和初始状态。若与 $M_2$ 等价的最小 DFA 恰有 $2$ 个状态，给出一个满足条件的终态集合 $F_2\subseteq P$。
3. 对 $\Sigma$ 上的字符串 $u$ 定义

   $$
   Y(u)=
   \begin{cases}
   1,&u\text{ 为空字符串},\\
   Y(v)\times n(a),&u=va,\ v\in\Sigma^*,\ a\in\Sigma.
   \end{cases}
   $$

   构造只接受满足 $Y(u)\bmod 6=0$ 且 $Y(u)\ne0$ 的字符串 $u$ 的 DFA $M_3$。其状态集合为
   $\{q_0,q_1,q_2,q_3,q_6\}$，初始状态为 $q_1$，终态集合为 $\{q_6\}$；各状态含义如下：
   - $q_0$：$Y(u)=0$；
   - $q_1$：$Y(u)\bmod2\ne0$ 且 $Y(u)\bmod3\ne0$；
   - $q_2$：$Y(u)\bmod2=0$ 且 $Y(u)\bmod6\ne0$；
   - $q_3$：$Y(u)\bmod3=0$ 且 $Y(u)\bmod6\ne0$；
   - $q_6$：$Y(u)\bmod6=0$ 且 $Y(u)\ne0$。

   画出 $M_3$ 的状态迁移图。

【问题 2】在字母表 $\Sigma=\{a,b\}$ 上，$|w|$ 表示字符串 $w$ 的长度，$w[i]$ 表示其第 $i$ 个字符，$w^R$ 表示其逆序字符串。对满足 $|x|=|y|\ge1$ 的字符串 $x,y$，定义汉明距离
$d(x,y)=|\{i\mid1\le i\le|x|,\ x[i]\ne y[i]\}|$。若存在 $x,z\in\Sigma^*$ 使 $w=xyz$，则称 $y$ 为 $w$ 的子串；字符 $\#$ 不属于 $\Sigma$。考虑以下均为上下文无关语言的五个语言：

$$
\begin{aligned}
L_0 &= \{w\mid w\in\Sigma^*,\ w=w^R\},\\
L_1 &= \{wxw^R\mid w\in\Sigma^*,\ x\in\Sigma\},\\
L_2 &= \{uxvw\mid u,v,w\in\Sigma^*,\ uv=w^R,\ x\in\Sigma\},\\
L_3 &= \{uv\mid u,v\in\Sigma^*,\ |u|=|v|\ge1,\ d(u^R,v)\le1\},\\
L_4 &= \{x\#w\mid x,w\in\Sigma^*,\ x^R\text{ 是 }w\text{ 的子串}\}.
\end{aligned}
$$

例如 $L_0$ 可由产生式
$S\to aSa\mid bSb\mid a\mid b\mid\varepsilon$
生成，其中 $\varepsilon$ 为空字符串。分别完成：

1. 给出生成 $L_1$ 的上下文无关文法产生式，唯一非终结符及开始符号均为 $S$。
2. 给出生成 $L_2$ 的产生式，非终结符为 $S,T$，开始符号为 $S$。
3. 给出生成 $L_3$ 的产生式，非终结符为 $S,T$，开始符号为 $S$。
4. 给出生成 $L_4$ 的产生式，非终结符为 $S,T,X$，开始符号为 $S$。

#### 考点

- **确定性有限自动机构造**：依据模运算和字符数值乘积的分类定义补全自动机的全部状态转移。
- **确定性有限自动机最小化**：通过选择终态集合控制状态等价类，使等价最小自动机的状态数恰为指定值。
- **上下文无关文法构造**：针对回文中心、逆序匹配、至多一次字符不一致和逆串子串匹配等约束，设计具有指定非终结符的产生式。

## **Kai**
### 【問１】
#### (1)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2020_automata_and_formal_language_p1.png" width="585" height="490" alt=""/>
</figure>

#### (2)

$$
F_2 = \{p_0, p_2\}
$$

#### (3)

$$
Y(u) \text{ mod } 6 \equiv 0, Y(u) \neq 0
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2020_automata_and_formal_language_p2.png" width="600" height="600" alt=""/>
</figure>

### 【問２】
#### (1)

$$
S \to aSa \mid bSb \mid a \mid b
$$

#### (2)

$$
\begin{aligned}
    S &\to aSa \mid bSb \mid aT \mid bT \\
    T &\to aTa \mid bTb \mid \varepsilon
\end{aligned}
$$

#### (3)

$$
\begin{aligned}
S &\to aSa \mid bSb \mid \varepsilon \mid aTb \mid bTa \\
T &\to aTa \mid bTb \mid \varepsilon
\end{aligned}
$$

#### (4)

$$
\begin{aligned}
    S &\to TX \\
    T &\to aTa \mid bTb \mid \# X \\
    X &\to aX \mid bX \mid \varepsilon
\end{aligned}
$$
