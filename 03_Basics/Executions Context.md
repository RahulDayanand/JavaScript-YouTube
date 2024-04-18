JavaScript Execution Context

{} -> Global EC -> this -> window(for browser)

3 Types Of Execution Context
1 - Global Execution Context
2 - Function Execution Context
3 - Eval Execution Context

{} -> Memory Creation Phase
   -> Code Execution Phase

   eg - let val1 = 10;
        let val2 = 5;

        function add(num1,num2){
            let total = num1 + num2;
            return total;
        } 

        let result1 = add(val1,val2);
        let result2 = add(15,10);

        1 -> Global Execution Phase -> this

        2 -> Memory Allocation Phase -> val1 - undefined
                                        val2 - undefined
                                        add - defintion of entire function add
                                        result1 - undefined
                                        result2 - undefined

        3 -> Code Execution Phase -> val1 = 10
                                     val2 = 5
                                     
                                     add - creates one more GEC for function add()
                            Inside GEC - (New Variable Environment + Execution Thread) 
                            add() - Memory Allocation Phase - 
                                    val1 - undefined
                                    val2 - undefined
                                    total - undefined

                            Execution Phase - num1 = 10 ,num2 = 5,total = 15
                            After execution the total is returned back to GEC,
                            The GEC inside add() gets deleted once the Execution Phase is completed

                            result1 = 15
                            result2 = 25 //similar process is done for result 2 as well

      Call Stack - LIFO(Last In First Out)

      Let's say there is function one(),two(),three() and you call all the functions
      one by one - one(),two(),three(),since three() came at last it will be the first one 
      to get popped out of the stack and then two() and then one()