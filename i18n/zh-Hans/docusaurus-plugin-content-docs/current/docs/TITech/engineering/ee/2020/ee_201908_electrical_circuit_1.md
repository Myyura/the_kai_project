---
sidebar_label: "2019年8月実施 電気回路1"
tags:
  - TITech
  - Electrical-Circuit
---
# 東京工業大学 工学院 電気電子系 2019年8月実施 電気回路1

## **Author**
Zero

## **Description**
図 $1.1$ の回路について以下の問に答えよ。回路の抵抗を $R$,キャパシタンスを $C$ とする。ただし，$t = 0$ におけるキャパシタの電荷を $0$ とする。また図 $1.2$，図 $1.3$ の時間軸において，黒丸は範囲の端を含み，白丸は範囲の端を含まないものとする。

(1) 回路の両端 $ab$ に印加する電圧を $v(t)$,キャパシタの電圧を $v_c(t)$ とする。回路方程式を $R,C,v(t),v_c(t)$ を用いて表せ。

(2) $v(t)$ として図 $1.2$ に示す電圧を回路の両端 $ab$ に印加した。回路方程式を解いて, $t \ge 0$ における $v_c(t)$ を求めよ。ただし，$V$ は正とする。 

(3) 十分に時間が経ったときのキャパシタの静電エネルギーを求めよ。

(4) $v(t)$ として図 $1.3$ に示す $2V$ から $V$ に変化する電圧を回路の両端 $ab$ に印加した。$v_c(t)$ を求めよ。ただし，$t = 0$ におけるキャパシタの電荷を $0$ とし，$V$ および $a$ は正とする。

(5) 問 (4)において $t \ge a$ のときキャパシタが放電した。$a,R,C$ に成り立つ関係式を求めよ。

(6) 問 (4)において $R,C$ を調整したところ，$t \ge a$ において回路に流れる電流が $0$ となった。$t = 0$ から $a$ までに，抵抗 $R$ で消費された電力量を $C,V$ を用いて求めよ。 

(7) 問 (6)において $t = 0$ から $a$ までに端子 $ab$ から供給された電力量を $C,V$ を用いて求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electrical_circuit_1_p1.png" width="500" alt=""/>
</figure>

## **Kai** 
### (1)

$$
RC \frac{dv_c(t)}{dt} + v_c(t) = v(t)
$$

### (2)

$$
RC \frac{dv_c(t)}{dt} + v_c(t) = V
$$

$$
\frac{dv_c(t)}{dt} + \frac{1}{RC}v_c(t) = \frac{V}{RC}
$$

積分因子 $e^{\int\frac{1}{RC}dt} = e^{\frac{t}{RC}}$

$$
\big(v_c(t)e^{\frac{t}{RC}}\big)' = \frac{V}{RC} e^{\frac{t}{RC}}
$$

$$
v_c(t)e^{\frac{t}{RC}} = Ve^{\frac{t}{RC}} + A \quad (A = \text{constant})
$$

$$
v_c(t) = V + Ae^{-\frac{t}{RC}}
$$

$$
v_c(t) = \frac{q(0)}{C} = 0 = V + A \Leftrightarrow A = -V
$$

従って、

$$
v_c(t) = V(1 - e^{-\frac{t}{RC}})
$$

### (3)

$$
v_c(\infty) = V
$$

$$
\overline{\omega} = \frac{1}{2}CV^2
$$

### (4)

$$
\begin{aligned}
\frac{dv_c(t)}{dt} + \frac{1}{RC}v_c(t) &= \frac{1}{RC}(2VU(t) - VU(t - a)) \\
SV_c(S) + \frac{1}{RC}V_c(S) &= \frac{V}{RC}(\frac{2}{S} - \frac{1}{S}e^{-aS}) \\
V_c(S) \frac{RCS + 1}{RC} &= \frac{V}{RCS}(2 - e^{-aS}) \\
V_c(S) &= \frac{RC}{RCS + 1} \cdot \frac{V}{RCS}(2 - e^{-aS}) \\
V_c(S) &= \frac{V}{S(SCR + 1)}(2 - e^{-aS}) \\
&= \frac{V}{RC} \cdot \frac{1}{S(SCR + 1)}(2 - e^{-aS}) \\
&= V(\frac{1}{S} - \frac{1}{S + \frac{1}{RC}})(2 - e^{-aS}) \\
&= 2V(\frac{1}{S} - \frac{1}{S + \frac{1}{SC}}) - V(\frac{1}{S} - \frac{1}{S + \frac{1}{RC}})e^{-aS}
\end{aligned}
$$

従って、

$$
v_c(t) = 2V(1 - e^{-\frac{t}{RC}})U(t) - V(1 - e^{-\frac{1}{RC}(t - a)})U(t - a)
$$

### (5)

$$
v_c(a) = v(a)
$$

$$
V = 2V(1 - e^{-\frac{a}{RC}})
$$

$$
1 < 2 - 2e^{-\frac{a}{RC}} 
$$

$$
e^{-\frac{a}{RC}} < \frac{1}{2}
$$

$$
-\frac{a}{RC} < \log\frac{1}{2}
$$

$$
\frac{a}{RC} < \log2
$$

$$
a < RC\log2
$$

### (6)

$$
v(a) = v_c(a)
$$

$$
V = 2V(1 - e^{-\frac{a}{RC}})
$$

$$
e^{-\frac{a}{RC}} = \frac{1}{2}
$$

$$
2 = e^{\frac{a}{RC}}
$$

また、$0 \le t < a$ より、

$$
v_c(t) = 2V(1 - e^{-\frac{t}{RC}})
$$

$$
i(t) = C\frac{d}{dt} v_c(t)
$$


$v(t) = 2V$ より、

$$
\begin{aligned}
i(t) &= C\frac{d}{dt}(2V(1 - e^{-\frac{t}{RC}})) \\
&= 2CV \cdot \frac{1}{RC}e^{-\frac{t}{RC}} \\
&= 2\frac{V}{R}e^{-\frac{t}{RC}}
\end{aligned}
$$

よって、

$$
\begin{aligned}
P_1 &= \int_0^a Ri^2(t)dt \\
&= \int_0^a R \cdot \frac{4V^2}{R^2} e^{-\frac{2}{RC}t}dt \\
&= \frac{4V^2}{R}\int_0^a e^{-\frac{2}{RC}t}dt \\
&= \frac{4V^2}{R} \bigg[-\frac{RC}{2}e^{-\frac{2}{RC}t}\bigg]_0^a \\
&= \frac{4V^2}{R} \cdot \frac{RC}{2} \bigg[-e^{-\frac{2}{RC}t}\bigg]_0^a \\
&= 2CV^2 (1 - e^{-\frac{2}{RC}a}) \\
&= 2CV^2 (1 - \big(\frac{1}{e^{\frac{a}{RC}}})^2\big) \\
&= 2CV^2 ( 1 - \frac{1}{4}) \\
&= \frac{3}{2}CV^2
\end{aligned}
$$

### (7)

$$
\begin{aligned}
P &= \int_0^a i(t)v(t)dt \\
&= \int_0^a 2V \cdot 2 \cdot \frac{V}{R} e^{-\frac{t}{RC}}dt \\
&= 4 \frac{V^2}{R} \int_0^a e^{-\frac{t}{RC}}dt \\
&= 4 \cdot \frac{V^2}{R} \bigg[-RCe^{-\frac{t}{RC}}\bigg]_0^a \\
&= 4CV^2 [ - e^{-\frac{a}{RC}} + 1] \\
&= 4CV^2 ( 1 - \frac{1}{2}) \\
&= 2CV^2
\end{aligned}
$$