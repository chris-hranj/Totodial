makeCall = true

function write_file (filename, text)
  output = io.open(filename, "w")
  io.output(output)
  io.write(text)
  io.close(output)
end

function read_file (filename)
  input = io.open(filename, "r")
  io.input(input)
  input_content = io.read()
  io.close(input)
  return input_content
end

function give_money()
  memory.writebyte(0x0D575, 255)
  memory.writebyte(0x0D574, 255)
  memory.writebyte(0x0D573, 15)
end

function get_name()
  j = memory.readbyterange( 0xD1A3, 7)
  print(tostring(j))
end

--currently working
function check_phone()
  local say_text = 'H-hello? AAAAAA? It\'s a disaster! Uh, um, it\'s just terrible! What should I do? It... Oh, no... Please get back here now.'
  --check for 98 because 0x62=98
  if(memory.readbyte(0xC3B5) == 98) then
    if makeCall then
      write_file('call.txt', '<?xml version="1.0" encoding="UTF-8"?><Response><Say>'..say_text..'</Say></Response>')
      print("PHONE CALL")
      makeCall = false
      --check ram D175-D177 for address of text string
      --vba.pause()
    end
  end
end

while(true)
  do
    check_phone()
    vba.frameadvance()
  end
  --text displays in E4B9-E4CB ***
  -- next line on E4CD-E4DE but is left blank
  --next line on E4E1-E4F2 ****
  -- 7C = text border, 7F = empty space
  --
