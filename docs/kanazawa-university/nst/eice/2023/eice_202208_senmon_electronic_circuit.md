---
sidebar_label: "2022年8月実施 専門科目 電子回路"
tags:
  - Kanazawa-University
  - Electronic-Circuit
---
# 金沢大学 自然科学研究科 電子情報通信学専攻 2022年8月実施 専門科目 電子回路

## **Author**
[金沢大学](https://www.kanazawa-u.ac.jp/)

## **Description**
図1に示すオペアンプを用いた回路を考える。なお，オペアンプの特性は理想的であるとする。以下の設問に答えなさい。

### 問1
図1(a)に示す回路について考える。以下の小問に答えなさい。

(1) 抵抗 $R_1$ に流れる電流を $i_1$ とするとき，入力インピーダンス $v_{\mathrm{in}}/i_1$ を求めなさい。

(2) 抵抗 $R_3$ に流れる電流の大きさは，抵抗 $R_1$ に流れる電流の大きさ $|i_1|$ の何倍になるか求めなさい。

(3) 電圧利得 $v_{\mathrm{out}}/v_{\mathrm{in}}$ を求めなさい。  

### 問2
図1(b)に示す回路について考える。以下の小問に答えなさい。

(1) 入力電圧 $v_1$ が角周波数 $\omega$ の正弦波であるとき，定常状態における伝達関数 $v_0(\omega)/v_1(\omega)$ を求めなさい。

(2) 時間 $t$ の関数として入力電圧を $v_1(t)$，抵抗 $R$ に流れる電流を $i(t)$ とする。このとき，$v_1(t)$ と $i(t)$ の関係を表す積分方程式を示しなさい。 

(3) 入力電圧 $v_1(t)$ に単位ステップ関数 $u(t)$ で表される電圧を入力した。  

$$
v_1(t)=u(t)=
\begin{cases}
0 & (t<0) \\
1 & (t\ge 0)
\end{cases}
$$

このときの $t>0$ の出力電圧 $v_0(t)$ を $R,\,R_f,\,C,\,t$ を用いて表しなさい。ただし，時刻 $t=0$ において，キャパシタ $C$ の初期電荷は 0 とする。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kanazawa_university/nst/eiec_202208_senmon_electronic_circuit_p1.png" width="600" alt=""/>
</figure>

## **Kai**
### 問1
#### (1)
$v_{\mathrm{in}} = R_1i_1$ より

$$
R_1 = \frac{v_{\mathrm{in}}}{i_1}
$$

#### (2)
抵抗 $R_3$ に流れる電流を $i_3$ とすると、

$$
-R_2 (i_1 - i_3) = R_2i_1
$$

$$
i_3 = 2i_1
$$

よって、２倍。

#### (3)
抵抗 $R_3$ に流れる電流を $i_3$ とすると、

$$
R_2 (i_1 - i_3) = R_3i_3 + v_{\mathrm{out}}
$$

$$
v_{\mathrm{out}} = -R_2i_1 - 2R_3i_1
$$

よって、

$$
\frac{v_{\mathrm{out}}}{v_{\mathrm{in}}} = -\frac{R_2+2R_3}{R_1}
$$

### 問2
#### (1)
抵抗 $R$ に流れる電流を $i(\omega)$ とすると、

$$
v_1(\omega) = (R + \frac{1}{j\omega C})i(\omega)
$$

$$
v_0(\omega) = -R_fi(\omega)
$$

よって、

$$
\frac{v_0(\omega)}{v_1(\omega)} = -\frac{j\omega C R_f}{1 + j\omega C R}
$$

#### (2)

$$
v_1(t) = Ri(t) + \frac{1}{C} \int i(t)\ dt
$$

#### (3)
前問 (2) より

$$
v_1(t) = Ri(t) + \frac{1}{C} \int_0^t i(\tau)\ d\tau
$$

$v_1(t) = u(t)$ であり、ラプラス変換を行う。但し、$i(t)$ のラプラス変換を $I(s)$ とるす。

$$
\frac{1}{s} = RI(s) + \frac{1}{C} \frac{I(s)}{s}
$$

$$
I(s) = \frac{1}{R} \frac{1}{s + \frac{1}{CR}}
$$

逆ラプラス変換より

$$
i(t) = \frac{1}{R} \exp (\frac{-t}{CR})
$$

よって、$v_0(t)=-R_fi(t)$ より

$$
v_0(t) = -\frac{R_f}{R} \exp (\frac{-t}{CR})
$$
