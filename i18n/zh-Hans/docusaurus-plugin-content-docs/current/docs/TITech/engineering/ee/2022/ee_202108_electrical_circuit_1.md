---
sidebar_label: "2021年8月実施 電気回路1"
tags:
  - TITech
  - Electrical-Circuit
---
# 東京工業大学 工学院 電気電子系 2021年8月実施 電気回路1

## **Author**
Zero

## **Description**
図 $1.1$ の回路について以下の問に答えよ。$R$ を抵抗，$L$ をインダクタンス，$C$ をキャパシタンスとする。$V_{in}$ を入力電圧，$V_{out}$ を出力電圧とする。虚数単位は $j$ を用いる。

問 (1) ~ 問 (4)では，角周波数 $\omega$ に対して図 $1.2$ のように定義された伝達関数 $H(\omega) = \frac{V_{out}(\omega)}{V_{in}(\omega)}$ について考える。

(1) 図 $1.1$ の回路の伝達関数 $H(\omega)$ を答えよ。その際，以下の形に変形して四角枠部(ア)～(ウ)を解答欄に記入せよ。

$$
H(\omega) = \frac{R}{\boxed{(ア)} + j\boxed{(イ)} + \frac{1}{j\boxed{ウ}}}
$$

(2) 伝達関数 $H(\omega)$ の利得 $|H(\omega)|$ が最大となる角周波数 $\omega_0$ を図中の回路素子パラメータ $R,L,C$ のうち必要なものを用いて示せ。

(3) $\omega = \omega_0$ における利得 $|H(\omega_0)|$ を示せ。

(4) 図 $1.1$ の回路はフィルタとして利用することができる。どのようなフィルタか，名称あるいは機能を述べよ。 

問 (5) ~ 問 (7)ではラプラス変換を用いて回路の応答を求める。図 $1.3$ のように複素数 $s$ に対して定義された伝達関数 $H(s) = \frac{V_{out}(s)}{V_{in}(s)}$ について考える。 

(5) 図 $1.1$ の回路の伝達関数 $H(s)$ を答えよ。 

(6) 問 (5)の伝達関数のポール（極）の値を図中の回路素子パラメータ $R,L,C$ のうち必要なものを用いて示せ。 

(7) 問 (6)で求めたポールが $2$ つの負の実数となる場合を考える。それらを $-\alpha_1$ と $-\alpha_2$ とし、$\alpha_1 > \alpha_2$ であるとする。回路の単位ステップ応答 $v_{out}(t)$ を求めよ。答は $R,L,C$ を用いずに $\alpha_1$ および $\alpha_2$ を用いて示せ。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202108_electrical_circuit_1_p1.png" width="600" alt=""/>
</figure>

## **Kai** 
### (1)

$$
V_{out} = \frac{R}{R + j\omega L + \frac{1}{j\omega C}}V_{in}
$$

$$
H(\omega) = \frac{V_{out}}{V_{in}} = \frac{R}{R + j\omega L + \frac{1}{j\omega C}}
$$

従って、

$$
\boxed{(ア)} = R,\boxed{(イ)} = \omega L, \boxed{ウ} = \omega C
$$

### (2)

$$
|H(\omega) = \frac{R}{\sqrt{R^2 + (\omega L - \frac{1}{\omega C})^2}}|
$$

$R > 0,(\omega L - \frac{1}{\omega C}) \ge 0$ より、$|H(\omega)|$ は、$\omega_0L - \frac{1}{\omega_0 C} = 0$ で最大値をより、

$$
\omega_0 L = \frac{1}{\omega_0 C}
$$

従って、

$$
\omega_0 = \frac{1}{\sqrt{LC}}
$$

### (3)

$$
|H(\omega_0)| = \frac{R}{\sqrt{R^2}} = 1
$$

### (4)
バンドパスフィルタ

共振周波数でのみ、そのまま、電圧を伝える。

### (5)
$j\omega \rightarrow s$ として、

$$
H(s) = \frac{R}{R + sL + \frac{1}{sC}}
$$

### (6)

$$
\begin{aligned}
H(s) &= \frac{sCR}{sCR + s^2LC + 1} \\
&= \frac{s \cdot \frac{R}{L}}{s^2 + s\frac{R}{L} + \frac{1}{LC}}
\end{aligned}
$$

分母多項式が $0$ となるのは、

$$
s^2LC + sCR + 1 = 0
$$

$$
s^2 + \frac{R}{L}s + \frac{1}{LC} = 0
$$

$$
s = \frac{-\frac{R}{L} + \sqrt{(\frac{R}{L})^2 - \frac{4}{LC}}}{2}
$$


### (7)

$$
\left \{
\begin{aligned}
\alpha_1 &= \frac{\frac{R}{L} - \sqrt{(\frac{R}{L})^2 - \frac{4}{LC}}}{2} \\
\alpha_2 &= \frac{\frac{R}{L} + \sqrt{(\frac{R}{L})^2 - \frac{4}{LC}}}{2} \\
\end{aligned}
\right.
$$

よって、$\alpha_1 + \alpha_2 = \frac{R}{L}$

$$
H(s) = \frac{(\alpha_1 + \alpha_2)s}{(s + \alpha_1)(s + \alpha_2)}
$$

$$
\begin{aligned}
V_{out}(s) &= H(s) \cdot \frac{1}{s} \\
&= \frac{\alpha_1 + \alpha_2}{(s + \alpha_1)(s + \alpha_2)} \\
&= -\frac{\alpha_1 + \alpha_2}{\alpha_1 - \alpha_2} \cdot \frac{1}{s + \alpha_1} + \frac{\alpha_1 + \alpha_2}{\alpha_1 - \alpha_2} \cdot \frac{1}{s + \alpha_2} \\
&= -\frac{\alpha_1 + \alpha_2}{\alpha_1 - \alpha_2}(\frac{1}{s + \alpha_1} - \frac{1}{s + \alpha_2})
\end{aligned}
$$

従って、

$$
v_{out}(t) = -\frac{\alpha_1 + \alpha_2}{\alpha_1 - \alpha_2}(e^{-\alpha_1 t} - e^{-\alpha_2t})
$$