package MySpringBootAPI.Calculator;


import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://0.0.0.0:8000") // Allow requests from your frontend
@RestController
public class CalculatorController {
    @GetMapping("/add")

     public Calculator add(@RequestParam(value = "num1", defaultValue = "0") int num1,
                           @RequestParam(value = "num2", defaultValue = "0") int num2) {

        return new Calculator(String.valueOf(num1 + num2));

         }
    
    @GetMapping("/sub")

    public Calculator sub(@RequestParam(value = "num1", defaultValue = "0") int num1,
                          @RequestParam(value = "num2", defaultValue = "0") int num2) {

        return new Calculator(String.valueOf(num1 - num2));

        }

}

