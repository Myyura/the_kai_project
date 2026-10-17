---
sidebar_label: '2022年8月実施 問題3 情報工学I'
tags:
  - Tokyo-University
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Source-Extension
  - Computer-Science.Information-Theory.Huffman-Coding
  - Computer-Science.Information-Theory.Mutual-Information
  - Computer-Science.Information-Theory.Channel-Capacity
  - Electrical-Electronic.Signal-Processing.Causal-Response-Hilbert-Transform-Relation
  - Electrical-Electronic.Signal-Processing.Single-Sideband-Modulation
---

# 東京大学 工学系研究科 電気系工学専攻 2022年8月実施 問題3 情報工学I


## **Author**
[donguri0912](https://sekakota.hatenablog.com/entry/eeis-2022-3), 祭音Myyura

## **Description**
### I
情報理論に関する以下の問に答えよ．無記憶情報源 $X = \{0,1\}$ における $i$ 番目 (ただし $i = 1,2,3,\cdots$)  の信号を $X_i$ とし，$X_i = 0$ となる確率を $p,X_i = 1$ となる確率を $1 - p$ とする．近似値として $\log_23 = 1.6 ,\log_25 = 2.3 ,\log_27 = 2.8$ を用いてよい．

(1) $p = 0.75$ のときのエントロピー $H(X)$ を求めよ．

(2) $p = 0.75$ のとき, $X$ の連続した $2$ つの信号をひとまとめにした $\{00,01,10,11\}$ の $4$ 値を効率よく符号化したい．符号化の例を示し，そのときの平均符号長を求めよ．

$X$ を入力とする無記憶通信路 $C$ を考える．その出力を $Y = \{0,1\}$, $i$ 番目の出力信号を $Y_i$ したとき，$80$% の確率で $Y_i = X_i$ となるが，$20$% の確率で $X_i$ にかかわらず $Y_i = 1$ となる．

(3) $p = 0.75$ のときのエントロピー $H(Y)$ を求めよ．また，相互情報量 $I(X;Y)$ を求めよ．

(4) $I(X;Y)$ を最大化する $p$ は $0.5$ より大きいか小さいか答えよ．根拠も簡潔に述べよ．

### II
信号処理に関する以下の問に答えよ．時間 $t$ および角周波数 $\omega$ は実数，$j$ は虚数単位であり，複素数 $a$ の複素共役を $a^*$ と表す．また，複素関数 $x(t)$ のフーリエ変換 $X(\omega)$ とそのフーリエ逆変換を次式で定義する．

$$
X(\omega) = \mathcal{F}[x(t)] = \int_{-\infty}^{\infty} x(t)e^{-j\omega t}dt \tag{i}
$$

$$
x(t) = \mathcal{F}^{-1}[X(\omega)] = \frac{1}{2\pi}\int_{-\infty}^{\infty}X(\omega)e^{j\omega t} d\omega \tag{ii}
$$

(1) $\mathcal{F}^{-1}[X^*(\omega)] = x^*(-t)$ が成り立つことを示せ.

(2) $x(t)$ が実関数のとき，$X^*(\omega) = X(-\omega)$ が成り立つことを示せ.

アナログフィルタ Aのインパルス応答を実関数 $f(t)$ で表す．$A$ の応答が因果律を満たすことから，$t < 0$ において $f(t) = 0$ である．また，$F(\omega) = \mathcal{F}[f(t)]$ の実部および虚部をそれぞれ $F_1(\omega),F_2(\omega)$ とおくと，$F(\omega) = F_1(\omega) + jF_2(\omega)$ である．

(3) $f_1(t) = \mathcal{F}^{-1}[F_1(\omega)]$ を，$f(t)$ を用いて表せ．

(4) $f_2(t) = \mathcal{F}^{-1}[F_2(\omega)]$ を，$f(t)$ を用いて表せ．

(5) $F_1(\omega)$ が既知で $F_2(\omega)$ が未知のとき，フーリエ変換とフーリエ逆変換を用いることで $F_1(\omega)$ から $F_2(\omega)$ を求めることができる．その手続きを $3$ 行程度で説明せよ．必要に応じて図や式を用いても良い．

ある実信号 $s_1(t)$ の角周波数帯域が $|\omega| \le \omega_B$ である，すなわち，$|\omega| > \omega_B$ のとき $\mathcal{F}[s_1(t)] = S_1(\omega) = 0$ とする．この信号により角周波数 $\omega_C\ (\gg\omega_B)$ の搬送波を変調する状況を考える．

(6) 実信号 $d(t) = s_1(t)\cos\omega_Ct$ のフーリエ変換 $D(\omega) = \mathcal{F}[d(t)]$ を $S_1(\omega)$ を用いて表せ．また，$D(\omega)$ の角周波数帯域が $\omega_C - \omega_B \le |\omega| \le \omega_C + \omega_B$ となることを示せ．

(7) $s_1(t)$ が既知であれば，適切な実信号 $s_2(t)$ を準備し，実信号 $u(t) = s_1(t)\cos\omega_Ct + s_2(t)\sin\omega_Ct$ を生成することで，$U(\omega) = \mathcal{F}[u(t)]$ の角周波数帯域を $\omega_C \le |\omega| \le \omega_C + \omega_B$ に制限することができる．$s_1(t)$ から $s_2(t)$ を求める手続きを $3$ 行程度で説明せよ．必要に応じて図や式を用いても良い．

#### 题目描述

**I.** 回答以下信息论问题。设无记忆信源 $X=\{0,1\}$ 的第 $i$ 个信号（$i=1,2,3,\ldots$）为 $X_i$，$X_i=0$ 的概率为 $p$，$X_i=1$ 的概率为 $1-p$。可以使用近似值 $\log_2 3=1.6$、$\log_2 5=2.3$、$\log_2 7=2.8$。

(1) 当 $p=0.75$ 时，求熵 $H(X)$。

(2) 当 $p=0.75$ 时，将 $X$ 的连续两个信号组合成 $\{00,01,10,11\}$ 四个值，希望对其高效编码。给出一种编码方式，并求其平均码长。

考虑以 $X$ 为输入的无记忆信道 $C$。设输出为 $Y=\{0,1\}$，第 $i$ 个输出信号为 $Y_i$。有 $80\%$ 的概率 $Y_i=X_i$，另有 $20\%$ 的概率与 $X_i$ 无关而令 $Y_i=1$。

(3) 当 $p=0.75$ 时，求熵 $H(Y)$ 和互信息 $I(X;Y)$。

(4) 使 $I(X;Y)$ 最大的 $p$ 大于还是小于 $0.5$？简述理由。

**II.** 回答以下信号处理问题。时间 $t$ 和角频率 $\omega$ 为实数，$j$ 为虚数单位，复数 $a$ 的复共轭用 $a^*$ 表示。复函数 $x(t)$ 的傅里叶变换 $X(\omega)$ 及其逆变换定义如下：

$$
X(\omega)=\mathcal F[x(t)]=\int_{-\infty}^\infty x(t)e^{-j\omega t}\,dt. \tag{i}
$$

$$
x(t)=\mathcal F^{-1}[X(\omega)]=\frac1{2\pi}\int_{-\infty}^\infty X(\omega)e^{j\omega t}\,d\omega. \tag{ii}
$$

(1) 证明 $\mathcal F^{-1}[X^*(\omega)]=x^*(-t)$。

(2) 当 $x(t)$ 为实函数时，证明 $X^*(\omega)=X(-\omega)$。

用实函数 $f(t)$ 表示模拟滤波器 A 的冲激响应。由于 A 的响应满足因果律，$t<0$ 时 $f(t)=0$。设 $F(\omega)=\mathcal F[f(t)]$ 的实部和虚部分别为 $F_1(\omega),F_2(\omega)$，则 $F(\omega)=F_1(\omega)+jF_2(\omega)$。

(3) 用 $f(t)$ 表示 $f_1(t)=\mathcal F^{-1}[F_1(\omega)]$。

(4) 用 $f(t)$ 表示 $f_2(t)=\mathcal F^{-1}[F_2(\omega)]$。

(5) 已知 $F_1(\omega)$ 而 $F_2(\omega)$ 未知时，可以利用傅里叶变换及其逆变换，由 $F_1(\omega)$ 求出 $F_2(\omega)$。用约三行说明其步骤，必要时可以使用图或公式。

设某个实信号 $s_1(t)$ 的角频率频带为 $|\omega|\le\omega_B$，即当 $|\omega|>\omega_B$ 时，$\mathcal F[s_1(t)]=S_1(\omega)=0$。考虑用此信号调制角频率为 $\omega_C$（$\gg\omega_B$）的载波。

(6) 用 $S_1(\omega)$ 表示实信号 $d(t)=s_1(t)\cos\omega_Ct$ 的傅里叶变换 $D(\omega)=\mathcal F[d(t)]$。并证明 $D(\omega)$ 的角频率频带为 $\omega_C-\omega_B\le|\omega|\le\omega_C+\omega_B$。

(7) 若已知 $s_1(t)$，可以准备适当的实信号 $s_2(t)$，生成实信号

$$
u(t)=s_1(t)\cos\omega_Ct+s_2(t)\sin\omega_Ct,
$$

从而将 $U(\omega)=\mathcal F[u(t)]$ 的角频率频带限制在 $\omega_C\le|\omega|\le\omega_C+\omega_B$。用约三行说明由 $s_1(t)$ 求 $s_2(t)$ 的步骤，必要时可以使用图或公式。

## **Kai**
### I

#### (1)
$$
H(X)=-\bigl(0.75\log_2 0.75+0.25\log_2 0.25\bigr)=0.8.
$$

#### (2)

下図は一例。

```text
───┬─0────────── 0  : 00 = 9/16
   └─1─┬─0────── 10 : 01 = 3/16
       └─1─┬─0── 110: 10 = 3/16
           └─1── 111: 11 = 1/16
```

平均符号長は

$$
\begin{aligned}
\bar\ell&=\frac9{16}+\frac3{16}\times2+\frac3{16}\times3+\frac1{16}\times3\\
&=\frac{27}{16}=1.6875.
\end{aligned}
$$

#### (3)

```text
      X        Y
0.25: 1 ─────── 1 : 0.25 + 0.75 * 20% = 0.40
　　         ─┐ 0.75 * 20%
           ／
         ／
0.75: 0 ─────── 0 : 0.75 * 80% = 0.60
Yで、1となる確率は 0.25 + 0.75 * 20% = 0.40
(もしくは 80% * 0.25 + 20% = 0.40か。
最初こう考えたが図で表しづらく他に応用が利かないと思った。)
よって、H(Y) = -(0.4 log 0.4 + 0.6 log 0.6) = 0.94
また、
H(Y|X) ≈ 0.75 × 0.70 = 0.525
I(X; Y) ≈ 0.94 - 0.525 = 0.415
```

ここでは問題の丸めた対数値を使った。正確な対数を使うと $H(Y)\simeq0.970951$、$H(Y|X)\simeq0.541446$、$I(X;Y)\simeq0.429505$ bit となる。途中でさらに丸めると誤差が増えることに注意。

#### (4)

$I(X;Y) = H(Y) - H(Y|X) = \mathcal{H}(0.8p) - p\mathcal{H}(0.2)$

$0<p<1$ では

$$
\frac{d^2I(X;Y)}{dp^2}=-\frac{0.8}{p(1-0.8p)\ln2}<0
$$

なので、内部の停留点があればそれが一意な最大点である。

$$
\begin{aligned}
\frac{d}{dp}I(X;Y)
&=-0.8\log0.8p-\frac{0.8}{\log_e2}\\
&\quad+0.8\log(1-0.8p)+\frac{0.8}{\log_e2}-\mathcal H(0.2)\\
&=0.8\log\frac{1-0.8p}{0.8p}-\mathcal H(0.2)=0.
\end{aligned}
$$

$$
p = \frac{1}{0.8\left(1+2^{\mathcal{H}(0.2)/0.8}\right)} \simeq 0.436 < 0.5
$$

よって最大となる $p$ は $0.5$ より小さい。ただし、$H$ の筆記体はエントロピー関数。

### II

#### (1)

$$
\begin{aligned}
\mathcal{F}^{-1}[X^*(\omega)]&=\frac{1}{2\pi}\int X^*(\omega)e^{j\omega t}d\omega\\
&=\bigg\{\frac{1}{2\pi}\int X(\omega) e^{j\omega(-t)}d\omega\bigg\}^*\\
&=x^*(-t)
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
X^*(\omega)&=\bigg\{\int x(t)e^{-j\omega t}dt\bigg\}^*\\
&=\int x(t)e^{-j(-\omega) t}dt\\
&=X(-\omega)
\end{aligned}
$$

#### (3)

$$
\begin{aligned}
f_1(t)&=\mathcal{F}^{-1}\bigg[\frac{F(\omega) + F^*(\omega)}{2}\bigg]\\
&=\frac{\mathcal{F}^{-1}[F(\omega)] + \mathcal{F}^{-1}[F^*(\omega)]}{2}\\
&=\frac{f(t) + f^*(-t)}{2}\\
&=\frac{f(t) + f(-t)}{2}
\end{aligned}
$$

#### (4)

$$
\begin{aligned}
f_2(t)&=\mathcal{F}^{-1}\bigg[\frac{F(\omega) - F^*(\omega)}{2j}\bigg]\\
&=\frac{\mathcal{F}^{-1}[F(\omega)] - \mathcal{F}^{-1}[F^*(\omega)]}{2j}\\
&=\frac{f(t) - f^*(-t)}{2j}\\
&=\frac{f(t) - f(-t)}{2j}
\end{aligned}
$$

#### (5)

$t < 0$ において、$f(t) = 0$ となることから、$t > 0$ において (3) より

$\mathcal{F}^{-1}[F_1(\omega)] = f_1(t) = f(t)/2 , t = 0$ のとき $\mathcal{F}^{-1}[F_1(\omega)] = f_1(t) = f(t)$ となる。よって、

$$
f(t) = \left\{
\begin{array}{ll}
2\mathcal{F}^{-1}[F_1(\omega)], & t > 0 \\
\mathcal{F}^{-1}[F_1(\omega)], & t = 0 \\
0, & t < 0 \\
\end{array}
\right.
$$

これのフーリエ変換 $F(\omega)$ から $F_2(\omega) = \frac{F(\omega) - F^*(\omega)}{2j}$ または $F_2(\omega) = \frac{F(\omega) - F_1(\omega)}{j}$ を計算すればよい。

#### (6)

$$
\begin{aligned}
D(\omega)&=\mathcal{F}[s_1(t)\cos\omega_C t]\\
&=S_1(\omega) * \bigg\{\frac{1}{2}\delta(\omega - \omega_C) + \frac{1}{2}\delta(\omega + \omega_C)\bigg\}\\
&=\frac{1}{2}S_1(\omega - \omega_C) + \frac{1}{2}S_1(\omega + \omega_C)
\end{aligned}
$$

ただし、$*$ は畳み込み積分である。

帯域は、$|\omega - \omega_C| \le \omega_B$ または $|\omega + \omega_C| \le \omega_B$ に広がり、簡単化すると、

$-\omega_B \le \omega - \omega_C \le \omega_B$ または $-\omega_B \le \omega + \omega_C \le \omega_B$

$\omega_C \gg \omega_B$ より $0 \le \omega_C - \omega_B \le \omega \le \omega_C + \omega_B$ または $-(\omega_C + \omega_B) \le \omega \le -(\omega_C - \omega_B) \le 0$　

よって $\omega_C - \omega_B \le |\omega| \le 
 \omega_C + \omega_B$

 #### (7)

$$
\begin{aligned}
U(\omega)&=\mathcal{F}[s_1(t)\cos\omega_C t + s_2(t)\sin\omega_C t]\\
&=\frac{1}{2}\bigg\{ S_1(\omega - \omega_C) + \frac{1}{j}S_2(\omega - \omega_C) \bigg\}\\
&\quad+ \frac{1}{2}\bigg\{ S_1(\omega + \omega_C) - \frac{1}{j}S_2(\omega + \omega_C) \bigg\}
\end{aligned}
$$

ここで $S_2(\omega) = j\,\operatorname{sgn}(\omega)S_1(\omega)$ とすると、$s_1(t)$ が実信号であることから

$$
S_2(-\omega)=-j\,\operatorname{sgn}(\omega)S_1^*(\omega)=S_2^*(\omega)
$$

が成り立つ。したがって $s_2(t)$ も実信号となる。この選択により、

$$
U(\omega) = 
\left\{
\begin{array}{ll}
S_1(\omega - \omega_C) + S_1(\omega + \omega_C), & \omega_C < |\omega| \le \omega_C + \omega_B \\
\frac{1}{2}S_1(0), & |\omega| = \omega_C \\
0, & \text{otherwise} \\
\end{array}
\right.
$$

となる。

よって、$\mathcal{F}^{-1}[j\,\operatorname{sgn}(\omega)] = -\operatorname{p.v.}\frac{1}{\pi t}$ であるから、$s_2(t) = \mathcal{F}^{-1}[S_2(\omega)] = -s_1(t) * \operatorname{p.v.}\frac{1}{\pi t}$ とすればよい。

ここで $\operatorname{p.v.}$ は Cauchy の主値であり、通常の広義積分として特異点を片側ずつ積分する意味ではない。

## **Reference**

- [東京大学公式：2022年度実施入試より・問題3（PDF 1–2ページ）](https://cms.ee.t.u-tokyo.ac.jp/assets/education/pdf/2022/P3J.pdf)
- [東京大学 電気系工学専攻：試験科目・年度別サンプル問題の案内](https://www.eeis.t.u-tokyo.ac.jp/education/subject/)
- [donguri0912：東大院電気系の過去問解説・2022年問題3](https://sekakota.hatenablog.com/entry/eeis-2022-3)
