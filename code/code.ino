
int lightIntensity = 0;
int LEDIntensity = 0;
const int photoPin = A5; // A1; //analog pin 1
int streetLED = 3;       // A6;
int highAnalogVal = 0;
int lowAnalogVal = 4096;

void setup()
{
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(streetLED, OUTPUT);
}

void loop()
{
  // put your main code here, to run repeatedly:
  lightIntensity = analogRead(photoPin);

  if (lightIntensity < lowAnalogVal)
  {
    lowAnalogVal = lightIntensity;
  }
  if (lightIntensity > highAnalogVal)
  {
    highAnalogVal = lightIntensity;
  }
  delay(100);
  //  Serial.println("high");
  //  Serial.println(lowAnalogVal);
  //  Serial.println("low");
  //  Serial.println(highAnalogVal);
  LEDIntensity = map(lightIntensity, lowAnalogVal, highAnalogVal, 0, 255);
  //  LEDIntensity = constrain(lightIntensity, 0, 255);
  Serial.println(LEDIntensity, DEC);
  // delay(100);

  if (LEDIntensity > 215)
  {
    analogWrite(streetLED, 255);
  }
  else
  {
    analogWrite(streetLED, LEDIntensity);
  }
  // Serial.println(value, DEC); // light intensity
}