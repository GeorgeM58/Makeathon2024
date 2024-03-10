int lightIntensity = 0;
int LEDIntensity = 0;
const int photoPin = A5; // A1; //analog pin 1
int streetLED = 3;       // A6;
int highAnalogVal = 0;
int lowAnalogVal = 4096;

const int trigPin = 11;
const int echoPin = 10;

float duration, distance;
int maxDistance = 125;
long cm;

void setup()
{
  // put your setup code here, to run once:
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  Serial.begin(9600);
  pinMode(streetLED, OUTPUT);
}

void loop()
{
  // put your main code here, to run repeatedly:

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // triggers the distance sensor to send out an ultrasonic pulse

  duration = pulseIn(echoPin, HIGH); // the duration of the pulse reflected off the object
  distance = (duration * .0343) / 2; // the calculated distance based on the duration

  // Serial.println(" Distance ");
  Serial.println(distance);
  // delay(100);

  int LEDIntensityDistance = map(distance, 2, maxDistance, 0, 125);

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
  LEDIntensity = map(lightIntensity, lowAnalogVal, highAnalogVal, 0, 255);
  // Serial.println(LEDIntensity,DEC); //uncomment for max value
  /*
      if (LEDIntensity > 215){
        analogWrite(streetLED, 255);
      }
      else{
        analogWrite(streetLED, LEDIntensity);

      }*/
  // Serial.println("Distance Mapped : "  );
  // Serial.println(LEDIntensityDistance);
  // analogWrite(streetLED, LEDIntensityDistance);

  if (LEDIntensity > 215)
  {
    analogWrite(streetLED, 255);
  }
  else if (distance > maxDistance)
  {
    analogWrite(streetLED, 225);
  }
  else
  {
    analogWrite(streetLED, LEDIntensityDistance);
  }

  // Serial.println(value, DEC); // light intensity
}