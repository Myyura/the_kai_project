---
sidebar_label: "2020年2・3月実施 基礎科目 問題2 電気回路"
tags:
  - Tohoku-University
  - Electrical-Circuit
---
# 東北大学 工学研究科 電気・情報系 2020年2・3月実施 基礎科目 問題2 電気回路

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
(1) Fig.2(a) に示す回路について以下の問に答えよ。 $E$ はフェーザ電圧である。また、分布定数線路は無損失であるとし、その分布定数線路の長さ、特性インピーダンス、位相定数をそれぞれ $l,Z_0,\beta$ である。

- (a) 端子対(2-2') での反射係数を $Z_0,Z$ を用いて表せ。

- (b) $Z = aZ_0$ のとき。端子対(1-1')から見たインピーダンス $Z_{in}$ を求めよ。ここで、$a,Z_0$ は正の実数とし、$a \neq 1$ とする。さらに、$Z_{in}$ が実数となる $l$ を求めよ。

- (c) $R_0 = 10 \Omega,Z_0 = 50 \Omega,Z = 50 \Omega$ とする。$Z$ における消費電力が $0.5$ W であるとき、$|E|$ の値を求めよ。
  
(2) Fig.2(b) に示す回路について以下の問に答えよ。電圧源 $e(t)$ は

$$
e(t) = \left \{
\begin{aligned}
&0 (t < 0) \\
&E_0 (0 \leq t < t_1) \\
&0 (t_1 \leq t)
\end{aligned}
\right.
$$

で与えられる。ここで、$E_0$ は正の実数である。$t < 0$ において回路を流れる電流を $0$ とする。

- (a) $0 \leq t < t_1$ における電圧 $v_L(t)$ を求めよ。

- (b) $t \geq t_1$ における $v_L(t)$ を求めよ。

- (c) $t_1 = 10L/R$ のとき、$0 < t <2t_1$ における $v_L(t)$ の概形を描け。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202003_kiso_2_electrical_circuit_p1.png" width="400"/>
</figure>

## **Kai** 
### (1)
#### (a)

$$
\Gamma = \frac{Z - Z_0}{Z + Z_0}
$$

#### (b)

$$
Z_{in} = Z_0 \cdot \frac{Z_r + jZ
_0 \tan\beta l}{Z_0 + jZ_r\tan\beta l} = Z_0 \cdot \frac{aZ_0 + jZ_0\tan\beta l}{Z_0 + ajZ_0\tan\beta l}
$$

$a \neq 1$ 排除了实部和虚部对应成比例的可能，必须让虚部为 $0$ 或者无穷

$$
\beta l = 0 + k\pi 
$$

or 

$$
\beta l = \frac{\pi}{2} + k\pi
$$

#### (c)
终端没有反射，电压全部吸收：

$$
\frac{V^2}{Z} = 0.5
$$

$$
V = 5
$$

输入端的输入阻抗为:

$$
Z_{in} = Z_0 = 50
$$

那么透过的波比例为：

$$
t = 1 + r = 1 + \frac{50 - 10}{50 + 10} = \frac{5}{3}
$$

$$
E = 3V
$$

### (2)
#### (a) - (b)

$$
e(t) = E_0 \cdot [u(t) - u(t - t_1)]
$$

$$
E(s) = \frac{E_0}{s} \cdot (1 - e^{-t_1s})
$$

$$
V_L = \frac{E(s)}{R + sL} \cdot sL = \frac{E_0(1 - e^{-t_1s})}{(S + \frac{R}{L})}
$$

$$
V_L(t) = E_0 \cdot e^{\frac{R}{L}t} \cdot u(t) - E_0 \cdot e^{\frac{R}{L}(t - t_1)} \cdot u(t - t_1)
$$

翻译成不含有开关函数的形式：

$$
V_L = E_0 \cdot e^{\frac{R}{L}t},0 < t < t_1
$$

$$
V_L = E_0 \cdot e^{\frac{R}{L}t} - E_0 \cdot e^{\frac{R}{L}(t - t_1)},t > t_1
$$

第二种还有进一步写法可以看出更明显的物理意义，本质上写出带开关的表达本题就完全解决了：

$$
V_L= E_0 \cdot e^{\frac{R}{L}t} - E_0 \cdot e^{\frac{R}{L}(t - t_1)} = E_0 \cdot (1 - e^{\frac{R}{L}t_1}) \cdot E^{\frac{R}{L}t},t > t_1
$$

就是电感有初始值的放电，但是电感的电压是会突变的，因此看起来有些奇怪如果考察电流就一目了然了。

#### (c)
$t_1 = 10\pi$ , 可以认为充放电足够完成，

$$
e^{10} \gg 1
$$ 

所以反向过充电压约等于 $-E_0$ 图如下：

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202003_kiso_2_electrical_circuit_p2.png" width="400"/>
</figure>